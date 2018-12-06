using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Veme.Models;
using Veme.Models.ViewModels;
using System.Data.Entity;
using System.Net.Mail;
using System.Web.Configuration;
using System.Net;
using System.Web.Security;
using System.Drawing;
using System.Drawing.Imaging;
using System.Data.Entity.Core.Objects;
using System.Threading.Tasks;
using System.Data.SqlTypes;
using Veme.Models.DBFirstContext;

namespace Veme.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private ApplicationDbContext _context = new ApplicationDbContext();
        private DBFirstContext _DBFirstContext = new DBFirstContext();
        [HttpGet]
        [AllowAnonymous]
        public ActionResult Index()
        {
            ViewBag.PublicKey = WebConfigurationManager.AppSettings["StripePublicKeyTest"];
            var viewModel = new HomeViewModel()
            {
                //get the latest deals that hasn't expired
                LatestOffers = _context.Offers
                                    .Include(c => c.Merchant)
                                    .Include(c => c.Categories)
                                    .OrderByDescending(c => c.CreationDate)
                                    .Where(c => DbFunctions.TruncateTime(c.OfferEnds) > DbFunctions.TruncateTime(DateTime.Now))
                                    .Where(c => c.TotalOffer > c.CouponUsed)
                                    .Take(8)
                                    .ToList()

            };
            //call check if date expired
            //var offerExpired = IsExpired(viewModel.LatestOffers[0].OfferEnds.ToShortDateString());
            //var getImg = viewModel.LatestOffers[0].OfferImg;
            //System.IO.File.WriteAllBytes(Server.MapPath("~/Content/Img.jpg"),getImg);
            return View(viewModel);
        }

        //Code to check if date expired
        [NonAction]
        public static bool IsExpired(string expireDate)
        {
            var flag = false;
            DateTime currentDate = DateTime.Now;

            DateTime target;

            if (DateTime.TryParse(expireDate, out target))
                flag = target < currentDate;

            return flag;
        }

        [Authorize(Roles = RoleName.Customer)]
        public ActionResult CouponDetails(int OfferId)
        {
            ViewBag.PublicKey = WebConfigurationManager.AppSettings["StripePublicKeyTest"];

            var getOffer = _context.Offers.Include(c => c.Merchant).FirstOrDefault(c => c.OfferId == OfferId);
            if (getOffer == null)
                return RedirectToAction("Index");

            var details = new CouponDetailsViewModel
            {
                Offer = getOffer
            };
            return View(details);
        }

        [Authorize(Roles = RoleName.Customer)]
        [ValidateAntiForgeryToken]
        [HttpPost]
        public ActionResult GetCoupon(int OfferId)//, string stripeToken)
        {
            //if (!ModelState.IsValid)
            //1.Return View if something is wrong
            if (!ModelState.IsValid)
                return RedirectToAction("Index");

            //2.Get the Offer Select
            var getOffer = _context.Offers.Include(c => c.Merchant).FirstOrDefault(c => c.OfferId == OfferId);

            //2. Charge the customer
            //var charge = Payment.Charge(stripeToken, getOffer);

            //Check if the money was paid
            //Return the user 
            //if (!charge)
            //    return RedirectToAction("Index");

            //3.Gets a random code from Production Table to assign to the Coupon
            var getRandomProductionCode = _context.ProductionCodes.Where(c => c.IsActive == false && c.IsUsed == false && c.OfferId == null).OrderBy(c => Guid.NewGuid()).FirstOrDefault();

            //Set coupon Purchase Time stamp
            var couponPurchaseTimeStamp = DateTime.Now;
            //sql DateTime object
            SqlDateTime sqlDateTime = new SqlDateTime(couponPurchaseTimeStamp);
            //4.The Production Code that was receive
            //will be assigned to the Offer and label as Active.
            if (getRandomProductionCode != null)
            {
                getRandomProductionCode.OfferId = OfferId;
                getRandomProductionCode.IsActive = true;
                //Sets the Date the coupon got bought
                _DBFirstContext.SetCouponCodePurchaseDateTimeById(getRandomProductionCode.ProductionCodeID);
                //getRandomProductionCode.PurchaseDate = couponPurchaseTimeStamp;//.TryParse("yyyy-MM-dd HH:mm:ss.fff");//this will capture the date and time of purchase //DateTime.Now.Date;
                _context.SaveChanges();
            }

            var details = new GenCouponViewModel()
            {
                OfferDetails = getOffer,
                CouponCode = getRandomProductionCode.CouponCode,
                CouponExpireDateTimeDisplay = couponPurchaseTimeStamp.AddHours(24)
            };
            //return RedirectToAction("Index");
            EmailCouponTOCustomer(details);
            return PreviewCoupon(details);
        }

        //Action shows the Preview of the Coupon
        [HttpGet]
        public ActionResult PreviewCoupon(GenCouponViewModel model)
        {
            return View("PreviewCoupon", model);
        }

        //Sends Coupon to customer
        public ActionResult EmailCouponTOCustomer(GenCouponViewModel model)
        {
            try
            {
                var email = "";
                //1.Check if User is signed in
                //gets email address if user is, return 
                if (User.Identity.IsAuthenticated)
                    email = User.Identity.Name;
                else
                    return RedirectToAction("Index");

                //renders the coupon html to string
                string body = System.IO.File.ReadAllText(Server.MapPath("~/Views/Home/_PreCoupon.html"));

                //Replace dummy Value in Coupon Email Template
                body = body.Replace("#Offerer", model.OfferDetails.Merchant.CompanyName);
                body = body.Replace("#OfferName", model.OfferDetails.OfferName);
                //body = body.Replace("#OfferEnds", model.OfferDetails.OfferEnds.ToString("MMM-dd-yyyy"));
                var expire = DateTime.Now.AddMonths(model.OfferDetails.CouponDurationInMonths);
                var expireTimeFormat = expire.ToString("MMM-dd-yyyy") + " at " + expire.ToString("hh:mm tt");
                //body = body.Replace("#OfferEnds", expire.ToString("MMM-dd-yyyy"));
                body = body.Replace("#OfferEnds", expireTimeFormat);
                body = body.Replace("#OfferDetails", model.OfferDetails.OfferDetails);
                body = body.Replace("#DiscountRate%", model.OfferDetails.DiscountRate.ToString() + "%");
                body = body.Replace("#CouponCode", model.CouponCode);

                MailMessage mail = new MailMessage();
                mail.From = new MailAddress(WebConfigurationManager.AppSettings["fromEmail"]);
                mail.Subject = "Veme Coupon";
                mail.Body = body;

                mail.IsBodyHtml = true;
                mail.Priority = MailPriority.Normal;
                //mail.AlternateViews.Add(textView);

                string smtpHost = WebConfigurationManager.AppSettings["smtpHost"];
                string smtpAcc = WebConfigurationManager.AppSettings["smtpUser"];
                string smtpPassword = WebConfigurationManager.AppSettings["smtpPassword"];
                int smtpPort = Convert.ToInt32(WebConfigurationManager.AppSettings["smtpPort"]);
                NetworkCredential cred = new NetworkCredential(smtpAcc, smtpPassword);

                using (SmtpClient mailClient = new SmtpClient(smtpHost, smtpPort))
                {
                    mailClient.EnableSsl = false;
                    mailClient.UseDefaultCredentials = false;
                    mailClient.Credentials = cred;
                    mail.To.Add(email);
                    mailClient.Send(mail);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.StackTrace);
                throw;
            }
            //returns nothing
            return null;
        }

        [AllowAnonymous]
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        [AllowAnonymous]
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpGet]
        [AllowAnonymous]
        public ActionResult Conditions()
        {
            return View();
        }

        [HttpGet]
        [AllowAnonymous]
        public ActionResult Policy()
        {
            return View();
        }
        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult> Contact(ContactViewModel model)
        {
            if (!ModelState.IsValid)
                //return View(model);
                return await Task.Run(() => View(model));

            //var basePath = HttpContext.Current.Server.MapPath(@"~\Content\EmailTemplates\contactEmail.html");
            //var basePath = System.IO.File.ReadAllLines(Server.MapPath(@"\Content\EmailTemplates\contactEmail.html"));
            var basePath = Server.MapPath(@"\Content\EmailTemplates\contactEmail.html");
            var body = System.IO.File.ReadAllText(basePath);
            body = body.Replace("@fullName", model.Name);
            body = body.Replace("@custEmail", model.Email);
            body = body.Replace("@custNumber", model.PhoneNumber);
            body = body.Replace("@Body", model.Message);

            MailMessage msg = new MailMessage();
            msg.Subject = model.Subject;
            msg.From = new MailAddress(WebConfigurationManager.AppSettings["fromEmail"]);
            msg.To.Add(new MailAddress("dwes_deomar@hotmail.com"));
            msg.Subject = model.Subject;
            msg.Body = body;
            msg.IsBodyHtml = true;

            SmtpClient smtpClient = new SmtpClient(WebConfigurationManager.AppSettings["smtpHost"], Convert.ToInt32(WebConfigurationManager.AppSettings["smtpPort"]));
            NetworkCredential credentials = new NetworkCredential(WebConfigurationManager.AppSettings["smtpUser"], WebConfigurationManager.AppSettings["smtpPassword"]);
            smtpClient.Credentials = credentials;
            smtpClient.EnableSsl = false;

            await smtpClient.SendMailAsync(msg);

            //return View();
            return await Task.Run(() => RedirectToAction("Contact"));
        }
    }
}