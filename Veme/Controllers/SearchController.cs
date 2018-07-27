using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Veme.Models;
using System.Data.Entity;
using Veme.Models.ViewModels;
using Veme.Models.POCO;
using System.Threading.Tasks;
using System.Text;

namespace Veme.Controllers
{
    public class SearchController : Controller
    {
        private ApplicationDbContext _context = new ApplicationDbContext();
        // GET: Search
        public ActionResult Index()
        {
            var viewModel = new SearchViewModel
            {
                AllOffers = _context.Offers.Include(c => c.Merchant).ToList(),
            };
            return View(viewModel);
        }

        [HttpPost]
        public ActionResult Index(SearchViewModel model)
        {
            if (model.AllOffers.Count() == 0)
                ViewBag.ResultMessage = NoResults();

            return View("Index", model);
        }
        public ActionResult Search(SearchViewModel model)
        {
            if (!ModelState.IsValid)
                return View("Index", model);

            var searchOffer = _context.Offers.Include(c => c.Merchant).Where(c => c.OfferName.Contains(model.SearchKey)).ToList();

            var viewModel = new SearchViewModel
            {
                AllOffers = searchOffer,
                SearchKey = model.SearchKey,
                Category = model.Category
            };
            return Index(viewModel);
        }
        //1. Gets the number of pages 
        //the search results should cover
        //Divide maxCount by 20
        //int CalculatePages(int maxCount) => maxCount / 20;
        //int CalculateNumberofRows(int maxCount)
        string NoResults()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append(@"
                        <section class=""latest - coupon container pad - top - lg pad - bottom - md"">
                        <div class=""row"">
                            <header class=""col-xs-12 text-center header"">
                                <h2 class=""heading"">No Results</h2>
                            </header>
                        </div>
                        </section>
                     ");
            return sb.ToString();
        }

        async Task FilterOffersByCategory(string category)
        {
            if (!String.IsNullOrEmpty(category))
            {
                //get all offers with joining Merchant details
                var filterByCategory = _context.Offers.Include(m => m.Merchant).ToList();

                //Get the categoryId
                var catId = _context.Categories.FirstOrDefault(c => c.CategoryName.Contains(category));

                if (catId == null)
                    return;

                //get merchants with that offer
                //var getMerchants = _context.Merchants.Where(c => c.Categories.Any(m => m.CategoryName.Contains(category)));
                //var getOffers = _context.Offers.Include(c => c.Merchant).Where(m => m.MerchantID == getMerchants.Any(r => r.));
                List<Offer> searchResult = new List<Offer>();

                foreach (var offer in filterByCategory)
                {
                    foreach (var categories in offer.Merchant.Categories)
                    {
                        await Task.Run(() => Console.WriteLine(categories.CategoryName));
                    }
                }
            }
        }

        public ActionResult Categories(int CategoryId)
        {
            var filterByCat = _context.Offers.Include(c => c.Categories)
                                 .Include(m => m.Merchant)
                                 .Where(o => o.Categories.Any(c => c.CategoryId == CategoryId));
            var search = new SearchViewModel
            {
                AllOffers = filterByCat.ToList()
            };
            return Index(search);
        }
    }
}