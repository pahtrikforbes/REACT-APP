using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Veme.Models.POCO;

namespace Veme.Models
{
    public class GenCouponViewModel
    {
        public string CouponCode { get; set; }
        public Offer OfferDetails { get; set; }

        //Stores the purchase Date and Time
        public DateTime CouponExpireDateTimeDisplay { get; set; }
    }
}