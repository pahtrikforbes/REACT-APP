using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Configuration;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Microsoft.Owin.Security;
using Veme.Models;
using System.Web;
namespace Veme
{
    public class EmailService : IIdentityMessageService
    {
        public Task SendAsync(IdentityMessage message)
        {
            // Plug in your email service here to send an email.
            //return Task.FromResult(0);
            return SendEmailAsync(message);
        }
        private async Task SendEmailAsync(IdentityMessage message)
        {
            //#region formatter
            //string text = string.Format("Please click on this link to {0}: {1}", message.Subject, message.Body);
            //string html = "Please confirm your account by clicking this link: <a href=\"" + message.Body + "\">link</a><br/>";

            //html += HttpUtility.HtmlEncode(@"Or click on the copy the following link on the browser:" + message.Body);
            //#endregion
           
            var basePath = System.Web.HttpContext.Current.Server.MapPath(@"~\Content\EmailTemplates\confirmEmail.html");
            var body = System.IO.File.ReadAllText(basePath);
            body = body.Replace("@url", message.Body);
            MailMessage msg = new MailMessage();
            msg.From = new MailAddress(WebConfigurationManager.AppSettings["fromEmail"]);
            msg.To.Add(new MailAddress(message.Destination));
            msg.Subject = message.Subject;
            msg.Body = body;
            //msg.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(text, null, MediaTypeNames.Text.Plain));
            //msg.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(html, null, MediaTypeNames.Text.Html));
            msg.IsBodyHtml = true;

            SmtpClient smtpClient = new SmtpClient(WebConfigurationManager.AppSettings["smtpHost"], Convert.ToInt32(WebConfigurationManager.AppSettings["smtpPort"]));
            System.Net.NetworkCredential credentials = new System.Net.NetworkCredential(WebConfigurationManager.AppSettings["smtpUser"], WebConfigurationManager.AppSettings["smtpPassword"]);
            smtpClient.Credentials = credentials;
            smtpClient.EnableSsl = false;
            await smtpClient.SendMailAsync(msg);

            //            MailMessage mail = new MailMessage();
            //            mail.From = new MailAddress(WebConfigurationManager.AppSettings["fromEmail"]);
            //            mail.Subject = message.Subject;
            //            mail.Body = html;
            //            //mail.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(text, null, MediaTypeNames.Text.Plain));
            //            mail.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(html, null, MediaTypeNames.Text.Html));


            //            mail.IsBodyHtml = true;
            //            mail.Priority = MailPriority.Normal;
            //            //mail.AlternateViews.Add(textView);

            //            string smtpHost = WebConfigurationManager.AppSettings["smtpHost"];
            //            string smtpAcc = WebConfigurationManager.AppSettings["smtpUser"];
            //            string smtpPassword = WebConfigurationManager.AppSettings["smtpPassword"];
            //            int smtpPort = Convert.ToInt32(WebConfigurationManager.AppSettings["smtpPort"]);
            //            NetworkCredential cred = new NetworkCredential(smtpAcc, smtpPassword);

            //            using (SmtpClient mailClient = new SmtpClient(smtpHost, smtpPort))
            //            {
            //                mailClient.EnableSsl = false;
            //                mailClient.UseDefaultCredentials = false;
            //                mailClient.Credentials = cred;
            //#if DEBUG
            //                    mail.To.Add("dwes_deomar@hotmail.com");
            //#endif
            //                mail.To.Add(message.Destination);
            //                await mailClient.SendMailAsync(mail);
            //            }

        }
    }

    public class SmsService : IIdentityMessageService
    {
        public Task SendAsync(IdentityMessage message)
        {
            // Plug in your SMS service here to send a text message.
            return Task.FromResult(0);
        }
    }

    // Configure the application user manager used in this application. UserManager is defined in ASP.NET Identity and is used by the application.
    public class ApplicationUserManager : UserManager<ApplicationUser>
    {
        public ApplicationUserManager(IUserStore<ApplicationUser> store)
            : base(store)
        {
        }

        public static ApplicationUserManager Create(IdentityFactoryOptions<ApplicationUserManager> options, IOwinContext context) 
        {
            var manager = new ApplicationUserManager(new UserStore<ApplicationUser>(context.Get<ApplicationDbContext>()));
            // Configure validation logic for usernames
            manager.UserValidator = new UserValidator<ApplicationUser>(manager)
            {
                AllowOnlyAlphanumericUserNames = false,
                RequireUniqueEmail = true
            };

            // Configure validation logic for passwords
            manager.PasswordValidator = new PasswordValidator
            {
                RequiredLength = 6,
                RequireNonLetterOrDigit = true,
                RequireDigit = true,
                RequireLowercase = true,
                RequireUppercase = true,
            };

            // Configure user lockout defaults
            manager.UserLockoutEnabledByDefault = true;
            manager.DefaultAccountLockoutTimeSpan = TimeSpan.FromMinutes(5);
            manager.MaxFailedAccessAttemptsBeforeLockout = 5;

            // Register two factor authentication providers. This application uses Phone and Emails as a step of receiving a code for verifying the user
            // You can write your own provider and plug it in here.
            manager.RegisterTwoFactorProvider("Phone Code", new PhoneNumberTokenProvider<ApplicationUser>
            {
                MessageFormat = "Your security code is {0}"
            });
            manager.RegisterTwoFactorProvider("Email Code", new EmailTokenProvider<ApplicationUser>
            {
                Subject = "Security Code",
                BodyFormat = "Your security code is {0}"
            });
            manager.EmailService = new EmailService();
            manager.SmsService = new SmsService();
            var dataProtectionProvider = options.DataProtectionProvider;
            if (dataProtectionProvider != null)
            {
                manager.UserTokenProvider = 
                    new DataProtectorTokenProvider<ApplicationUser>(dataProtectionProvider.Create("ASP.NET Identity"));
            }
            return manager;
        }
    }

    // Configure the application sign-in manager which is used in this application.
    public class ApplicationSignInManager : SignInManager<ApplicationUser, string>
    {
        public ApplicationSignInManager(ApplicationUserManager userManager, IAuthenticationManager authenticationManager)
            : base(userManager, authenticationManager)
        {
        }

        public override Task<ClaimsIdentity> CreateUserIdentityAsync(ApplicationUser user)
        {
            return user.GenerateUserIdentityAsync((ApplicationUserManager)UserManager);
        }

        public static ApplicationSignInManager Create(IdentityFactoryOptions<ApplicationSignInManager> options, IOwinContext context)
        {
            return new ApplicationSignInManager(context.GetUserManager<ApplicationUserManager>(), context.Authentication);
        }
    }
}
