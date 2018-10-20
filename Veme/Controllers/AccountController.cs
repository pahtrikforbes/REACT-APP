using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;
using System.Web.Security;
using Facebook;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Newtonsoft.Json.Linq;
using Veme.Models;
using Veme.Models.POCO;

namespace Veme.Controllers
{
    [Authorize]
    public class AccountController : Controller
    {
        private ApplicationSignInManager _signInManager;
        private ApplicationUserManager _userManager;
        private ApplicationDbContext _context = new ApplicationDbContext();

        public AccountController()
        {
        }

        public AccountController(ApplicationUserManager userManager, ApplicationSignInManager signInManager )
        {
            UserManager = userManager;
            SignInManager = signInManager;
        }

        public ApplicationSignInManager SignInManager
        {
            get
            {
                return _signInManager ?? HttpContext.GetOwinContext().Get<ApplicationSignInManager>();
            }
            private set 
            { 
                _signInManager = value; 
            }
        }

        public ApplicationUserManager UserManager
        {
            get
            {
                return _userManager ?? HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }

        //
        // GET: /Account/Login
        [AllowAnonymous]
        public ActionResult Login(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            return View();
        }

        //
        // POST: /Account/Login
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Login(LoginViewModel model, string returnUrl)
        {
            //*********Original Code********//
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            // This doesn't count login failures towards account lockout
            // To enable password failures to trigger account lockout, change to shouldLockout: true
            try
            {
                var result = await SignInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, shouldLockout: false);
                switch (result)
                {
                    case SignInStatus.Success:
                        var user = await UserManager.FindAsync(model.Email, model.Password);
                        
                        //Add this to check if the email was confirmed.
                        if (!await UserManager.IsEmailConfirmedAsync(user.Id))
                        {
                            ModelState.AddModelError("", "You need to confirm your email.");
                            return View(model);
                        }
                        //Add to check if user account is locked
                        //if (await UserManager.IsLockedOutAsync(user.Id))
                        //{
                        //    return View("Lockout");
                        //}
                        
                        if (String.IsNullOrEmpty(returnUrl))
                        {
                            //Redirect to Home for customers
                            if (UserManager.IsInRole(user.Id, RoleName.Customer))
                                return RedirectToAction("Index", "Home");

                            //Redirect to validateOffer for Merchant Role
                            if (UserManager.IsInRole(user.Id, RoleName.Merchant))
                                return RedirectToAction("RedeemCoupon", "Merchant");
                                //return RedirectToAction("CreateOffer", "Merchant");
                        }
                        return RedirectToLocal(returnUrl);
                    case SignInStatus.LockedOut:
                        return View("Lockout");
                    case SignInStatus.RequiresVerification:
                        return RedirectToAction("SendCode", new { ReturnUrl = returnUrl, RememberMe = model.RememberMe });
                    case SignInStatus.Failure:
                    default:
                        ModelState.AddModelError("", "Invalid login attempt.");
                        return View(model);
                }
            }
            catch(Exception ex)
            {
                throw;
            }
        }

        //
        // GET: /Account/VerifyCode
        [AllowAnonymous]
        public async Task<ActionResult> VerifyCode(string provider, string returnUrl, bool rememberMe)
        {
            // Require that the user has already logged in via username/password or external login
            if (!await SignInManager.HasBeenVerifiedAsync())
            {
                return View("Error");
            }
            return View(new VerifyCodeViewModel { Provider = provider, ReturnUrl = returnUrl, RememberMe = rememberMe });
        }

        //
        // POST: /Account/VerifyCode
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> VerifyCode(VerifyCodeViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            // The following code protects for brute force attacks against the two factor codes. 
            // If a user enters incorrect codes for a specified amount of time then the user account 
            // will be locked out for a specified amount of time. 
            // You can configure the account lockout settings in IdentityConfig
            var result = await SignInManager.TwoFactorSignInAsync(model.Provider, model.Code, isPersistent:  model.RememberMe, rememberBrowser: model.RememberBrowser);
            switch (result)
            {
                case SignInStatus.Success:
                    return RedirectToLocal(model.ReturnUrl);
                case SignInStatus.LockedOut:
                    return View("Lockout");
                case SignInStatus.Failure:
                default:
                    ModelState.AddModelError("", "Invalid code.");
                    return View(model);
            }
        }

        //
        // GET: /Account/Register
        [AllowAnonymous]
        public ActionResult Register()
        {
            return View();
        }

        //
        // GET: /Account/RegisterCustomer
        [AllowAnonymous]
        public ActionResult RegisterCustomer()
        {
            ViewBag.SiteKey = WebConfigurationManager.AppSettings["reCAPTCHASiteKey"];
            return View();
        }

        //
        // GET: /Account/RegisterCustomer
        [AllowAnonymous]
        public ActionResult RegisterMerchant()
        {
            ViewBag.SiteKey = WebConfigurationManager.AppSettings["reCAPTCHASiteKey"];
            var viewModel = new RegisterMerchantViewModel
            {

            };
            return View(viewModel);
        }


        //
        // POST: /Account/Register
        //Original Registration
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Register(RegisterViewModel model)
        {
                
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
                var result = await UserManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    #region Create and Add Roles
                    //Temp code to create rolls and add user
                    //var roleStore = new RoleStore<IdentityRole>(new ApplicationDbContext());
                    ////roll manager
                    //var roleManager = new RoleManager<IdentityRole>(roleStore);
                    ////to create the role
                    //await roleManager.CreateAsync(new IdentityRole(RoleName.Admin));
                    ////Add User to the Role
                    //await UserManager.AddToRoleAsync(user.Id,RoleName.Admin);
                    #endregion

                    //Change this code to send confirmation email to users verus logging them in immediately
                    //await SignInManager.SignInAsync(user, isPersistent:false, rememberBrowser:false);
                    
                    // For more information on how to enable account confirmation and password reset please visit https://go.microsoft.com/fwlink/?LinkID=320771
                    // Send an email with this link
                     string code = await UserManager.GenerateEmailConfirmationTokenAsync(user.Id);
                     var callbackUrl = Url.Action("ConfirmEmail", "Account", new { userId = user.Id, code = code }, protocol: Request.Url.Scheme);
                     await UserManager.SendEmailAsync(user.Id, "Confirm your account", "Please confirm your account by clicking <a href=\"" + callbackUrl + "\">here</a>");

                    return RedirectToAction("Index", "Home");
                }
                AddErrors(result);
            }

            // If we got this far, something failed, redisplay form
            return View(model);
        }

        //
        // POST: /Account/Register
        //Register a regular customer
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> RegisterCustomer(CustomerRegisterViewModel model)
        {
            var status = VerifyReCaptcha();
            if (!status)
                ModelState.AddModelError("", "Google reCaptcha validation failed");
            
            if(!model.IsCheck)
                ModelState.AddModelError("", "Please review and accept Terms & Conditions.");

            if (ModelState.IsValid && status)
            {
                var user = new ApplicationUser
                {
                    UserName = model.Email.Trim().ToLower(),
                    Email = model.Email.Trim().ToLower(),
                    PhoneNumber = model.MobileNumber.Trim(),
                    FirstName = model.FirstName.Trim().ToLower(),
                    LastName = model.LastName.Trim().ToLower()
                };

                var result = await UserManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    try
                    {
                        //1. Assign the user to a customer
                        var customer = new Customer()
                        {
                            CustomerId = user.Id,
                            DOB = model.DOB
                        };
                        _context.Customers.Add(customer);
                        _context.SaveChanges();

                    }
                    catch (Exception ex)
                    {
                        throw;
                    }
                    //1.Get UserRoles
                    //2.If Role is not there create
                    //3.Assigns Customer to Customer Role
                    //Assign Customer to user
                    var getRole = _context.Roles.SingleOrDefault(c=> c.Name.Contains(RoleName.Customer));

                    if(getRole == null)
                    {
                        //Temp code to create rolls and add user
                        var roleStore = new RoleStore<IdentityRole>(new ApplicationDbContext());
                        //roll manager
                        var roleManager = new RoleManager<IdentityRole>(roleStore);
                        //to create the role
                        await roleManager.CreateAsync(new IdentityRole(RoleName.Customer));

                        //Add User to the Role
                        await UserManager.AddToRoleAsync(user.Id, RoleName.Customer);
                    }
                    else
                        //Add User to the Role
                        await UserManager.AddToRoleAsync(user.Id, RoleName.Customer);

                    #region Create and Add Roles
                    //Temp code to create rolls and add user
                    //var roleStore = new RoleStore<IdentityRole>(new ApplicationDbContext());
                    ////roll manager
                    //var roleManager = new RoleManager<IdentityRole>(roleStore);
                    ////to create the role
                    //await roleManager.CreateAsync(new IdentityRole(RoleName.Admin));
                    ////Add User to the Role
                    //await UserManager.AddToRoleAsync(user.Id,RoleName.Admin);
                    #endregion

                    //Change this code to send confirmation email to users verus logging them in immediately
                    //await SignInManager.SignInAsync(user, isPersistent:false, rememberBrowser:false);

                    // For more information on how to enable account confirmation and password reset please visit https://go.microsoft.com/fwlink/?LinkID=320771
                    // Send an email with this link
                    string code = await UserManager.GenerateEmailConfirmationTokenAsync(user.Id);
                    var callbackUrl = Url.Action("ConfirmEmail", "Account", new { userId = user.Id, code = code }, protocol: Request.Url.Scheme);
                    //await UserManager.SendEmailAsync(user.Id, "Confirm your account", "Please confirm your account by clicking <a href=\"" + callbackUrl + "\">here</a>");
                    await UserManager.SendEmailAsync(user.Id, "Confirm your account", callbackUrl);

                    return RedirectToAction("Index", "Home");
                }
                AddErrors(result);
            }

            // If we got this far, something failed, redisplay form
            return View(model);
        }

        //1. This method gets the reCapctha and verify its status
        //2. return true is successful and false if not
        private bool VerifyReCaptcha()
        {
            ViewBag.SiteKey = WebConfigurationManager.AppSettings["reCAPTCHASiteKey"];
            var response = Request["g-recaptcha-response"];
            var secretKey = WebConfigurationManager.AppSettings["reCAPTCHASecretKey"];
            var client = new WebClient();
            var getResult = client.DownloadString(string.Format("https://www.google.com/recaptcha/api/siteverify?secret={0}&response={1}", secretKey, response));
            var obj = JObject.Parse(getResult);
            var status = (bool)obj.SelectToken("success");

            return status;
        }

        //
        // POST: /Account/Register
        //Register a Merchant
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> RegisterMerchant(RegisterMerchantViewModel model)
        {
            //Validate Google recaptcha here.
            //get true if recaptcha was successful
            var status = VerifyReCaptcha();
            if (!status)
                ModelState.AddModelError("", "Google reCaptcha validation failed");

            if (ModelState.IsValid && status)
            {

                var user = new ApplicationUser
                                {
                                    UserName = model.Email.Trim(),
                                    Email = model.Email.Trim(),
                                    PhoneNumber = model.PhoneNumber.Trim(),
                                    FirstName = model.FirstName.Trim(),
                                    LastName = model.LastName.Trim(),
                                };
                var result = await UserManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    try
                    {
                        //1. Assign the user to a merchant
                        var merchant = new Merchant()
                        {
                            MerchantID = user.Id,
                            CompanyDescriptiton = model.CompanyDescription.Trim(),
                            CompanyName = model.CompanyName.Trim(),
                            CompanyWebsite = model.CompanyWebsite.Trim()
                        };
 
                        //Initialize addresses
                        merchant.Addresses = new List<MerchantAddress>();
                        merchant.Addresses.Add(new MerchantAddress
                        {
                            City = model.City.Trim(),
                            Country = model.Country.Trim(),
                            Parish = model.Parish.Trim(),
                            StreetAddress1 = model.StreetAddress1.Trim(),
                            StreetAddress2 = model.StreetAddress2.Trim()

                        });
                        _context.Merchants.Add(merchant);
                        _context.SaveChanges();
                    }
                    catch (Exception ex)
                    {
                        throw;
                    }

                    //1.Get UserRoles
                    //2.If Role is not there create
                    //3.Assigns Customer to Customer Role
                    //Assign Customer to user
                    var getRole = _context.Roles.SingleOrDefault(c => c.Name.Contains(RoleName.Merchant));
                    if (getRole == null)
                    {
                        //Temp code to create rolls and add user
                        var roleStore = new RoleStore<IdentityRole>(new ApplicationDbContext());
                        //roll manager
                        var roleManager = new RoleManager<IdentityRole>(roleStore);
                        //to create the role
                        await roleManager.CreateAsync(new IdentityRole(RoleName.Merchant));

                        //Add User to the Role
                        await UserManager.AddToRoleAsync(user.Id, RoleName.Merchant);
                    }
                    else
                        //Add User to the Role
                        await UserManager.AddToRoleAsync(user.Id, RoleName.Merchant);

                    #region Create and Add Roles
                    //Temp code to create rolls and add user
                    //var roleStore = new RoleStore<IdentityRole>(new ApplicationDbContext());
                    ////roll manager
                    //var roleManager = new RoleManager<IdentityRole>(roleStore);
                    ////to create the role
                    //await roleManager.CreateAsync(new IdentityRole(RoleName.Admin));
                    ////Add User to the Role
                    //await UserManager.AddToRoleAsync(user.Id,RoleName.Admin);
                    #endregion

                    //Change this code to send confirmation email to users verus logging them in immediately
                    //await SignInManager.SignInAsync(user, isPersistent:false, rememberBrowser:false);

                    // For more information on how to enable account confirmation and password reset please visit https://go.microsoft.com/fwlink/?LinkID=320771
                    // Send an email with this link
                    string code = await UserManager.GenerateEmailConfirmationTokenAsync(user.Id);
                    var callbackUrl = Url.Action("ConfirmEmail", "Account", new { userId = user.Id, code = code }, protocol: Request.Url.Scheme);
                    //await UserManager.SendEmailAsync(user.Id, "Confirm your account", "Please confirm your account by clicking <a href=\"" + callbackUrl + "\">here</a>");
                    await UserManager.SendEmailAsync(user.Id, EmailSubject.ConfirmEmail, callbackUrl);

                    return RedirectToAction("Index", "Home");
                }
                AddErrors(result);
            }

            // If we got this far, something failed, redisplay form
            return View(model);
        }


        //
        // GET: /Account/ConfirmEmail
        [AllowAnonymous]
        public async Task<ActionResult> ConfirmEmail(string userId, string code)
        {
            if (userId == null || code == null)
            {
                return View("Error");
            }
            var result = await UserManager.ConfirmEmailAsync(userId, code);
            return View(result.Succeeded ? "ConfirmEmail" : "Error");
        }

        //
        // GET: /Account/ForgotPassword
        [AllowAnonymous]
        public ActionResult ForgotPassword()
        {
            return View();
        }

        //
        // POST: /Account/ForgotPassword
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> ForgotPassword(ForgotPasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await UserManager.FindByNameAsync(model.Email);
                if (user == null || !(await UserManager.IsEmailConfirmedAsync(user.Id)))
                {
                    // Don't reveal that the user does not exist or is not confirmed
                    return View("ForgotPasswordConfirmation");
                }

                // For more information on how to enable account confirmation and password reset please visit https://go.microsoft.com/fwlink/?LinkID=320771
                // Send an email with this link
                string code = await UserManager.GeneratePasswordResetTokenAsync(user.Id);
                var callbackUrl = Url.Action("ResetPassword", "Account", new { userId = user.Id, code = code }, protocol: Request.Url.Scheme);
                //await UserManager.SendEmailAsync(user.Id, "Reset Password", "Please reset your password by clicking <a href=\"" + callbackUrl + "\">here</a>");
                Session["ResetPassword"] = true;
                await UserManager.SendEmailAsync(user.Id, EmailSubject.ResetPassword, callbackUrl);
                //await UserManager.SendEmailAsync(messageDetails);
                return RedirectToAction("ForgotPasswordConfirmation", "Account");
            }

            // If we got this far, something failed, redisplay form
            return View(model);
        }

        //
        // GET: /Account/ForgotPasswordConfirmation
        [AllowAnonymous]
        public ActionResult ForgotPasswordConfirmation()
        {
            return View();
        }

        //
        // GET: /Account/ResetPassword
        [AllowAnonymous]
        public ActionResult ResetPassword(string code)
        {
            return code == null ? View("Error") : View();
        }

        //
        // POST: /Account/ResetPassword
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> ResetPassword(ResetPasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var user = await UserManager.FindByNameAsync(model.Email);
            if (user == null)
            {
                // Don't reveal that the user does not exist
                return RedirectToAction("ResetPasswordConfirmation", "Account");
            }
            var result = await UserManager.ResetPasswordAsync(user.Id, model.Code, model.Password);
            if (result.Succeeded)
            {
                return RedirectToAction("ResetPasswordConfirmation", "Account");
            }
            AddErrors(result);
            return View();
        }

        //
        // GET: /Account/ResetPasswordConfirmation
        [AllowAnonymous]
        public ActionResult ResetPasswordConfirmation()
        {
            return View();
        }

        //
        // POST: /Account/ExternalLogin
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult ExternalLogin(string provider, string returnUrl, string subcriber)
        {
            // Request a redirect to the external login provider
            //return new ChallengeResult(provider, Url.Action("ExternalLoginCallback", "Account", new { ReturnUrl = returnUrl }));
            return new ChallengeResult(provider, Url.Action("ExternalLoginCallbackCustomer", "Account", new { ReturnUrl = returnUrl, Subscriber = subcriber }));
        }

        //
        // GET: /Account/SendCode
        [AllowAnonymous]
        public async Task<ActionResult> SendCode(string returnUrl, bool rememberMe)
        {
            var userId = await SignInManager.GetVerifiedUserIdAsync();
            if (userId == null)
            {
                return View("Error");
            }
            var userFactors = await UserManager.GetValidTwoFactorProvidersAsync(userId);
            var factorOptions = userFactors.Select(purpose => new SelectListItem { Text = purpose, Value = purpose }).ToList();
            return View(new SendCodeViewModel { Providers = factorOptions, ReturnUrl = returnUrl, RememberMe = rememberMe });
        }

        //
        // POST: /Account/SendCode
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> SendCode(SendCodeViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }

            // Generate the token and send it
            if (!await SignInManager.SendTwoFactorCodeAsync(model.SelectedProvider))
            {
                return View("Error");
            }
            return RedirectToAction("VerifyCode", new { Provider = model.SelectedProvider, ReturnUrl = model.ReturnUrl, RememberMe = model.RememberMe });
        }

        /*
        // GET: /Account/ExternalLoginCallback
        [AllowAnonymous]
        public async Task<ActionResult> ExternalLoginCallback(string returnUrl)
        {
            var loginInfo = await AuthenticationManager.GetExternalLoginInfoAsync();
            if (loginInfo == null)
            {
                return RedirectToAction("Login");
            }

            // Sign in the user with this external login provider if the user already has a login
            var result = await SignInManager.ExternalSignInAsync(loginInfo, isPersistent: false);
            switch (result)
            {
                case SignInStatus.Success:
                    return RedirectToLocal(returnUrl);
                case SignInStatus.LockedOut:
                    return View("Lockout");
                case SignInStatus.RequiresVerification:
                    return RedirectToAction("SendCode", new { ReturnUrl = returnUrl, RememberMe = false });
                case SignInStatus.Failure:
                default:
                    // If the user does not have an account, then prompt the user to create an account
                    ViewBag.ReturnUrl = returnUrl;
                    ViewBag.LoginProvider = loginInfo.Login.LoginProvider;
                    return View("ExternalLoginConfirmation", new ExternalLoginConfirmationViewModel { Email = loginInfo.Email });
            }
        }
        */
        
         //
        // GET: /Account/ExternalLoginCallback
        [AllowAnonymous]
        public async Task<ActionResult> ExternalLoginCallbackCustomer(string returnUrl, string subscriber)
        {

            var firstName = "";
            var lastname = "";
            //DateTime? DOB = null;
            var mobileNumber = "";

            var loginInfo = await AuthenticationManager.GetExternalLoginInfoAsync();
            if (loginInfo == null)
            {
                return RedirectToAction("Login");
            }

            // added the following lines
            if (loginInfo.Login.LoginProvider == LoginProviders.Facebook)
            {
                var identity = AuthenticationManager.GetExternalIdentity(DefaultAuthenticationTypes.ExternalCookie);
                var access_token = identity.FindFirstValue("FacebookAccessToken");
                var fb = new FacebookClient(access_token);
                dynamic myInfo = fb.Get("/me?fields=first_name,last_name,email,birthday,website"); // specify the email field
                loginInfo.Email = myInfo.email;

                firstName = myInfo.first_name;
                lastname = myInfo.last_name;
            }

            if (loginInfo.Login.LoginProvider == LoginProviders.Google)
            {
                var externalIdentity = AuthenticationManager.GetExternalIdentityAsync(DefaultAuthenticationTypes.ExternalCookie);
                var emailClaim = externalIdentity.Result.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email);
                var lastNameClaim = externalIdentity.Result.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Surname);
                var givenNameClaim = externalIdentity.Result.Claims.FirstOrDefault(c => c.Type == ClaimTypes.GivenName);
                var dobClaim = externalIdentity.Result.Claims.FirstOrDefault(c => c.Type == ClaimTypes.DateOfBirth);
                var number = externalIdentity.Result.Claims.FirstOrDefault(c => c.Type == ClaimTypes.MobilePhone);

                //if number is null get the home number
                if (number == null)
                    number = externalIdentity.Result.Claims.FirstOrDefault(c => c.Type == ClaimTypes.HomePhone);
                //if home number is null get other number else set to empty string
                if (number == null)
                    number = externalIdentity.Result.Claims.FirstOrDefault(c => c.Type == ClaimTypes.OtherPhone);

                loginInfo.Email = emailClaim.Value;

                firstName = givenNameClaim.Value;
                lastname = lastNameClaim.Value;
                //DOB = Convert.ToDateTime(dobClaim.Value);
                mobileNumber = number != null ? number.Value : "";

            }
            //Sign in the user with this external login provider if the user already has a login
            var result = await SignInManager.ExternalSignInAsync(loginInfo, isPersistent: false);
            switch (result)
            {
                case SignInStatus.Success:
                    return RedirectToLocal(returnUrl);
                case SignInStatus.LockedOut:
                    return View("Lockout");
                case SignInStatus.RequiresVerification:
                    return RedirectToAction("SendCode", new { ReturnUrl = returnUrl, RememberMe = false });
                case SignInStatus.Failure:
                default:
                    ViewBag.ReturnUrl = returnUrl;
                    ViewBag.LoginProvider = loginInfo.Login.LoginProvider;

                    if (subscriber == SocialCaller.Login)
                    {
                        ModelState.AddModelError("", "You need to first register");
                        return View("Login");
                    }

                    //1. If the user does not have an account, then prompt the user is 
                    //sent to create an account based on the type of registration.

                    if(subscriber == SocialCaller.CustomerRegister)
                        return View("CustomerExternalLoginConfirmation", new ExternalLoginConfirmationCustomerViewModel { Email = loginInfo.Email,FirstName = firstName,LastName = lastname,MobileNumber = mobileNumber,DOB = null });
                    if(subscriber == SocialCaller.MerchantRegister)
                        return View("MerchantExternalLoginConfirmation", new ExternalLoginConfirmationMerchantViewModel { Email = loginInfo.Email,LastName = lastname, FirstName = firstName, PhoneNumber = mobileNumber });
                    //If something went wrong
                    return View("Login");
            }
        }

        //
        // POST: /Account/ExternalLoginConfirmation
        /*
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> ExternalLoginConfirmation(ExternalLoginConfirmationViewModel model, string returnUrl)
        {
            if (User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Index", "Manage");
            }

            if (ModelState.IsValid)
            {
                // Get the information about the user from the external login provider
                var info = await AuthenticationManager.GetExternalLoginInfoAsync();
                if (info == null)
                {
                    return View("ExternalLoginFailure");
                }
                var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
                var result = await UserManager.CreateAsync(user);
                if (result.Succeeded)
                {
                    result = await UserManager.AddLoginAsync(user.Id, info.Login);
                    if (result.Succeeded)
                    {
                        await SignInManager.SignInAsync(user, isPersistent: false, rememberBrowser: false);
                        return RedirectToLocal(returnUrl);
                    }
                }
                AddErrors(result);
            }

            ViewBag.ReturnUrl = returnUrl;
            return View(model);
        }
        */
        //
        // POST: /Account/ExternalLoginConfirmation
        /// <summary>
        /// 1. Customer use social media to register.
        /// 2.Redirect to CustomerExternalLoginConfirmation to fill out form
        /// 3.ExternalLoginConfirmationCustomer (POST) called to add customer to database and assign customer role.
        /// 4.If external user is empty, user is redirected to unsuccessful page
        /// </summary>
        /// <param name="model"> ExternalLoginConfirmationCustomerViewModel complex type</param>
        /// <param name="returnUrl">The return URL if any</param>
        /// <returns></returns>

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> ExternalLoginConfirmationCustomer(ExternalLoginConfirmationCustomerViewModel model, string returnUrl)
        {
            if (User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Index", "Manage");
            }

            if (ModelState.IsValid)
            {
                // Get the information about the user from the external login provider
                var info = await AuthenticationManager.GetExternalLoginInfoAsync();
                if (info == null)
                {
                    return View("ExternalLoginFailure");
                }
                var user = new ApplicationUser {
                    UserName = model.Email.Trim().ToLower(),
                    Email = model.Email.Trim().ToLower(),
                    PhoneNumber = model.MobileNumber.Trim(),
                    FirstName = model.FirstName.Trim().ToLower(),
                    LastName = model.LastName.Trim().ToLower()
                };
                var result = await UserManager.CreateAsync(user);
                if (result.Succeeded)
                {
                    try
                    {
                        //1. Assign the user to a customer
                        var customer = new Customer()
                        {
                            CustomerId = user.Id,
                            DOB = model.DOB.Value
                        };
                        _context.Customers.Add(customer);
                        _context.SaveChanges();

                    }
                    catch (Exception ex)
                    {
                        throw;
                    }
                    //1.Get UserRoles
                    //2.If Role is not there create
                    //3.Assigns Customer to Customer Role
                    //Assign Customer to user
                    var getRole = _context.Roles.SingleOrDefault(c => c.Name.Contains(RoleName.Customer));
                    if (getRole == null)
                    {
                        //Temp code to create rolls and add user
                        var roleStore = new RoleStore<IdentityRole>(new ApplicationDbContext());
                        //roll manager
                        var roleManager = new RoleManager<IdentityRole>(roleStore);
                        //to create the role
                        await roleManager.CreateAsync(new IdentityRole(RoleName.Customer));

                        //Add User to the Role
                        await UserManager.AddToRoleAsync(user.Id, RoleName.Customer);
                    }
                    else
                        //Add User to the Role
                        await UserManager.AddToRoleAsync(user.Id, RoleName.Customer);

                    result = await UserManager.AddLoginAsync(user.Id, info.Login);
                    if (result.Succeeded)
                    {
                        await SignInManager.SignInAsync(user, isPersistent: false, rememberBrowser: false);
                        return RedirectToLocal(returnUrl);
                    }
                }
                AddErrors(result);
            }

            ViewBag.ReturnUrl = returnUrl;
            return View("CustomerExternalLoginConfirmation",model);
        }

        //
        // POST: /Account/ExternalLoginConfirmationMerchant
        /// <summary>
        /// 1. Merchant use social media to register.
        /// 2.Redirect to CustomerExternalLoginConfirmation to fill out form
        /// 3.ExternalLoginConfirmationMerchant (POST) called to add customer to database and assign customer role.
        /// 4.If external user is empty, user is redirected to unsuccessful page
        /// </summary>
        /// <param name="model">Type for merchant info.</param>
        /// <param name="returnUrl"> The return Url if any.</param>
        /// <returns></returns>
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> ExternalLoginConfirmationMerchant(ExternalLoginConfirmationMerchantViewModel model, string returnUrl)
        {
            if (User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Index", "Manage");
            }

            if (ModelState.IsValid)
            {
                // Get the information about the user from the external login provider
                var info = await AuthenticationManager.GetExternalLoginInfoAsync();
                if (info == null)
                {
                    return View("ExternalLoginFailure");
                }

                var user = new ApplicationUser
                {
                    UserName = model.Email.Trim(),
                    Email = model.Email.Trim(),
                    PhoneNumber = model.PhoneNumber.Trim(),
                    FirstName = model.FirstName.Trim(),
                    LastName = model.LastName.Trim(),
                };

                var result = await UserManager.CreateAsync(user);
                if (result.Succeeded)
                {
                    try
                    {
                        //1. Assign the user to a merchant

                        var merchant = new Merchant()
                        {
                            MerchantID = user.Id,
                            CompanyDescriptiton = model.CompanyDescription.Trim(),
                            CompanyName = model.CompanyName.Trim(),
                            CompanyWebsite = model.CompanyWebsite.Trim()
                        };
                        //Initialize addresses
                        merchant.Addresses = new List<MerchantAddress>();
                        merchant.Addresses.Add(new MerchantAddress
                        {
                            City = model.City.Trim(),
                            Country = model.Country.Trim(),
                            Parish = model.Parish.Trim(),
                            StreetAddress1 = model.StreetAddress1.Trim(),
                            StreetAddress2 = model.StreetAddress2.Trim()

                        });
                        _context.Merchants.Add(merchant);
                        _context.SaveChanges();
                    }
                    catch (Exception ex)
                    {
                        throw;
                    }

                    //1.Get UserRoles
                    //2.If Role is not there create
                    //3.Assigns Customer to Customer Role
                    //Assign Customer to user
                    var getRole = _context.Roles.SingleOrDefault(c => c.Name.Contains(RoleName.Merchant));
                    if (getRole == null)
                    {
                        //Temp code to create rolls and add user
                        var roleStore = new RoleStore<IdentityRole>(new ApplicationDbContext());
                        //roll manager
                        var roleManager = new RoleManager<IdentityRole>(roleStore);
                        //to create the role
                        await roleManager.CreateAsync(new IdentityRole(RoleName.Merchant));

                        //Add User to the Role
                        await UserManager.AddToRoleAsync(user.Id, RoleName.Merchant);
                    }
                    else
                        //Add User to the Role
                        await UserManager.AddToRoleAsync(user.Id, RoleName.Merchant);

                    result = await UserManager.AddLoginAsync(user.Id, info.Login);
                    if (result.Succeeded)
                    {
                        await SignInManager.SignInAsync(user, isPersistent: false, rememberBrowser: false);
                        return RedirectToLocal(returnUrl);
                    }
                }
                AddErrors(result);
            }

            ViewBag.ReturnUrl = returnUrl;
            return View(model);
        }

        //
        // POST: /Account/LogOff
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult LogOff()
        {
            AuthenticationManager.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
            return RedirectToAction("Index", "Home");
        }

        //
        // GET: /Account/ExternalLoginFailure
        [AllowAnonymous]
        public ActionResult ExternalLoginFailure()
        {
            return View();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (_userManager != null)
                {
                    _userManager.Dispose();
                    _userManager = null;
                }

                if (_signInManager != null)
                {
                    _signInManager.Dispose();
                    _signInManager = null;
                }
            }

            base.Dispose(disposing);
        }  

        #region Helpers
        // Used for XSRF protection when adding external logins
        private const string XsrfKey = "XsrfId";

        private IAuthenticationManager AuthenticationManager
        {
            get
            {
                return HttpContext.GetOwinContext().Authentication;
            }
        }

        //Adds general errors to model state
        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError("", error);
            }
        }

        //return to location if return Url is not null
        private ActionResult RedirectToLocal(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            ////Gets the current user logged in
            var user = UserManager.FindById(User.Identity.GetUserId());
            ////Code to redirect based on user role logged in
            if (User.IsInRole(RoleName.Merchant))
                return RedirectToAction("CreateOffer", "Merchant");

            if (User.IsInRole(RoleName.Customer))
                return RedirectToAction("Index", "Home");

            if (User.IsInRole(RoleName.Admin))
                return RedirectToAction("CreateOffer", "Admin");

            return RedirectToAction("Index", "Home");
            //return RedirectToAction("Index", "PurchaseOffer");
        }

        //Handles login providers
        internal class ChallengeResult : HttpUnauthorizedResult
        {
            public ChallengeResult(string provider, string redirectUri)
                : this(provider, redirectUri, null)
            {
            }

            public ChallengeResult(string provider, string redirectUri, string userId)
            {
                LoginProvider = provider;
                RedirectUri = redirectUri;
                UserId = userId;
            }

            public string LoginProvider { get; set; }
            public string RedirectUri { get; set; }
            public string UserId { get; set; }

            public override void ExecuteResult(ControllerContext context)
            {
                var properties = new AuthenticationProperties { RedirectUri = RedirectUri };
                if (UserId != null)
                {
                    properties.Dictionary[XsrfKey] = UserId;
                }
                context.HttpContext.GetOwinContext().Authentication.Challenge(properties, LoginProvider);
            }
        }
        #endregion
    }
}