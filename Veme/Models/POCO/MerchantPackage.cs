using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

namespace Veme.Models.POCO
{
    public class MerchantPackage
    {
        public int Id { get; set; }

        [StringLength(100)]
        [Required]
        public string PackageName { get; set; }

        [Required]
        public SqlMoney PackageFee { get; set; }

        [Required]
        public int ValidationCalls { get; set; }

    }
}