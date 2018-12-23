using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

namespace Veme.Models.POCO
{
    public class CouponValidationPackage
    {
        public int Id { get; set; }

        [StringLength(100)]
        [Required]
        public string PackageName { get; set; }

        [Required]
        [Column(TypeName="Money")]
        public decimal PackagePrice { get; set; }

        [Required]
        public int Quantity { get; set; }
    }
}