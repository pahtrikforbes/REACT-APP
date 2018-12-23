using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Veme.Models.POCO;

namespace Veme.Models.ViewModels
{
    public class PackageViewModel
    {
        public List<CouponValidationPackage> Packages { get; set; }

        public int PackageId { get; set; }

        public string stripeToken { get; set; }


        public PackageViewModel()
        {
            Packages = new List<CouponValidationPackage>();
        }
    }
}