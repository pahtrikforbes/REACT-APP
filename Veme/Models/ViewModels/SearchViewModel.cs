using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Veme.Models.POCO;

namespace Veme.Models.ViewModels
{
    public class SearchViewModel
    {
        public string SearchKey { get; set; }
        public string Category { get; set; }
        public List<Offer> AllOffers { get; set; } = new List<Offer>();
    }
}