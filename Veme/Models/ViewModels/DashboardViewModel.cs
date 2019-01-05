using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace Veme.Models.ViewModels
{
    public class DashboardViewModel
    {
        public PackageInfo PackageInfo { get; set; }

        public PurchaseOverTime SalesPerMonth { get; set; }

        public DashboardViewModel()
        {
            PackageInfo = new PackageInfo();
        }
    }
    public class PackageInfo
    {
        public int Id { get; set; }

        [DisplayName("Package Name")]
        public string PackageName { get; set; }

        public decimal PackagePrice { get; set; }

        public int Quantity { get; set; }

        public int CallsMade { get; set; }
    }

    public class PurchaseOverTime
    {
        public string[] Months { get; set; }

        public int[] SalesPerMonth { get; set; }

        public PurchaseOverTime()
        {
            Months = new string[] { "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};
        }
    }
}