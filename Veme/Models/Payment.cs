﻿using Stripe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using Veme.Models.POCO;
using System.Data.Entity;
using System.Threading.Tasks;

namespace Veme.Models
{
    public static  class Payment
    {
        static ApplicationDbContext _context = new ApplicationDbContext();

        //Collect single charge for coupon
        //public static bool Charge(string stripeToken, Offer offer)
        //{
        //    StripeConfiguration.SetApiKey(WebConfigurationManager.AppSettings["StripeSecretKey"]);

        //    var token = stripeToken;
        //    var loginUser = _context.Merchants.Include(c => c.User).FirstOrDefault(c => c.MerchantID == offer.MerchantID);
        //    //Create stripe customerID
        //    var customerId = CreateStripeCustomer(loginUser.User.Id, token);

        //    var option = new StripeChargeCreateOptions
        //    {
        //        Amount = Convert.ToInt32(offer.CouponPrice * 100),
        //        Currency = "usd",
        //        Description = "Veme",
        //        ReceiptEmail = loginUser.User.Email, // returns the email address
        //        //SourceTokenOrExistingSourceId = token,
        //        CustomerId = customerId
        //    };
        //    var service = new StripeChargeService();
        //    StripeCharge charge = service.Create(option);
        //    //if (charge.Paid)
        //    //return Json(new { charge.Paid});
        //    return charge.Paid;
        //}

        public async static Task<bool> Charge(string stripeToken, CouponValidationPackage package,string MerchantId)
        {
            StripeConfiguration.SetApiKey(WebConfigurationManager.AppSettings["StripeSecretKey"]);

            var token = stripeToken;
            var loginUser = _context.Merchants.Include(c => c.User).FirstOrDefault(c => c.MerchantID == MerchantId);
            //Create stripe customerID
            //var customerId = CreateStripeCustomer(loginUser.User.Id, token);

            var option = new StripeChargeCreateOptions
            {
                Amount = Convert.ToInt32(package.PackagePrice * 100),
                Currency = "usd",
                Description = "Veme - " + package.PackageName,
                ReceiptEmail = loginUser.User.Email, // returns the email address
                SourceTokenOrExistingSourceId = token,
                Capture = true,
                
            };
            var service = new StripeChargeService();
            StripeCharge charge = service.Create(option);
            //Assign Package to Merchant if charge successful
            if (charge.Paid)
                await Payment.AssignPackage(package.Id, loginUser.MerchantID);
            //return Json(new { charge.Paid});
            return charge.Paid;
        }

        private async static Task AssignPackage(int PackageId,string userId)
        {
            var user = _context.Merchants.FirstOrDefault(c => c.MerchantID == userId);
            user.PackageId = PackageId;
            await _context.SaveChangesAsync();
        }
        private static string CreateStripeCustomer(string userId, string stripeToken)
        {
            var customerService = new StripeCustomerService();
            var getStripeCustomer = _context.StripeCustomers.FirstOrDefault(c => c.UserId == userId);

            if (getStripeCustomer != null)
                return getStripeCustomer.StripeCustomerID;

            var getUser = _context.Users.FirstOrDefault(c => c.Id == userId);

            var customerOptions = new StripeCustomerCreateOptions()
            {
                Description = "Veme Customer",
                SourceToken = stripeToken,
                Email = getUser.Email
            };

            Stripe.StripeCustomer customer = customerService.Create(customerOptions);

            _context.StripeCustomers.Add(new POCO.StripeCustomer
            {
                CreationDate = DateTime.Now.Date,
                StripeCustomerID = customer.Id,
                UserId = userId
            });
            _context.SaveChanges();
            return customer.Id;
        }
    }
}