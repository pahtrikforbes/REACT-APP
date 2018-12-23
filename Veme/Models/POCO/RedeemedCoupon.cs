using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Veme.Models.POCO
{
    public class RedeemedCoupon
    {
        public int Id { get; set; }

        public string MerchantId { get; set; }

        public int OfferId { get; set; }

        public DateTime RedeemDate { get; set; }

        public ICollection<Offer> Offers { get; set; }

        public ICollection<Merchant> Merchants { get; set; }
    }
}