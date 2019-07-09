using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Veme.Models.POCO
{
    public class ProductionCode
    {
        public int ProductionCodeID { get; set; }

        [StringLength(12)]
        public string CouponCode { get; set; }

        [DefaultValue(false)]
        public bool IsUsed { get; set; }

        [DefaultValue(false)]
        public bool IsActive { get; set; }

        [ForeignKey("Offers")]
        public int? OfferId { get; set; }

        public Offer Offers { get; set; }

        //[Column(TypeName = "Date")]
        //public DateTime? PurchaseDate = new DateTime();
        public DateTime? PurchaseDate { get; set; }
    }
}