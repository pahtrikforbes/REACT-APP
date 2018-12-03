using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Veme.Models;
using Veme.Models.POCO;
using Veme.Models.ViewModels;

namespace Veme.Controllers
{
    [Authorize(Roles = RoleName.Merchant)]
    public class MerchantController : Controller
    {
        private ApplicationDbContext _context;
        const int MAXMEGABYTES = 10485760;

        public MerchantController()
        {
            _context = new ApplicationDbContext();
            HtmlHelper.UnobtrusiveJavaScriptEnabled = true;
        }

        // GET: Merchant
        public ActionResult Index()
        {
            return View();
        }


        [HttpGet]
        public ActionResult CreateOffer()
        {
            //check if the action was called by edit offer
            if (TempData["result"] != null)
                ViewBag.IsEdit = true;
            var userId = User.Identity.GetUserId();
            var getUser = _context.Users.Include(c => c.Merchant).FirstOrDefault(c => c.Id == userId);

            //Gets and set the Merchant Id to the page
            var viewModel = new MerchantCreateOfferViewModel();
            viewModel.MerchantID = getUser.Merchant.MerchantID;
            viewModel.Merchant = getUser.Merchant;

            //1.Initialize the category list
            viewModel.Categories = new List<Category>();

            //2.Fetch the list of available Categories
            viewModel.Categories = _context.Categories.ToList();
            return View(viewModel);
        }


        public ActionResult Preview(MerchantCreateOfferViewModel model)
        {
            //Initialize and populate category
            model.Categories = new List<Category>();
            model.Categories = _context.Categories.ToList();

            //Returns to Create Offer if Offer Invalid
            if (!ModelState.IsValid)
                return View("CreateOffer", model);

            //1.Store model in a variable
            //To Send send to View
            var viewModel = model;

            //2.Stores the image in temp varibale to
            //pass to another action
            if(model.OfferImg != null)
                TempData["img"] = model.OfferImg;

            return View(model);
        }
        #region CreateOffer
        //[HttpPost]
        //public async Task<ActionResult> CreateOffer(MerchantCreateOfferViewModel model)
        //{
        //    if (!ModelState.IsValid)
        //        return View(model);

        //    try
        //    {
        //        return await StoreOffer(model);
        //    }
        //    catch
        //    {
        //        throw;
        //    }
        //}
        #endregion

        [HttpPost]
        public async Task<ActionResult> StoreOffer(MerchantCreateOfferViewModel model)
        {
            var userId = User.Identity.GetUserId();

            //retrieve the image file stored in tempData
            var file = TempData["img"] as HttpPostedFileBase;

            if (model == null)
                return RedirectToAction("CreateOffer");//return View("CreateOffer");
           
            //Create a new Offer
            var offerObj = new Offer()
            {
                DiscountRate = model.DiscountRate.Value,
                OfferBegins = model.OfferBegins.Value,
                OfferEnds = model.OfferEnds.Value,
                OfferDetails = model.OfferDetails,
                TotalOffer = model.TotalOffer,
                OfferName = model.OfferName,
                MerchantID = model.MerchantID,
                CreationDate = DateTime.Now.Date, //Set the creation date
                CouponDurationInMonths = model.CouponDurationInMonths.Value,
                CouponPrice = model.CouponPrice.Value,
                Categories = new List<Category>()
            };

            //path for storing img to file System
            var basePath = Server.MapPath(@"~\Content\images\" + userId + @"\" + offerObj.OfferName + @"\");
            
            //path stored in database for image retrieval
            var basePathWithoutServer = @"~\Content\images\" + userId + @"\" + offerObj.OfferName + @"\";
            
            //1.Checks if the path exist before creating
            if (!Directory.Exists(basePath))
                Directory.CreateDirectory(basePath);

            //Delete previous file from file system
            //Permission to delete has to be granted on the file system
            //else
            //{
            //    /**************************/
            //    /*Code delete files in dir*/
            //    /**************************/
            //    var files = new DirectoryInfo(basePath);
            //    foreach (var item in files.GetFiles())
            //        item.Delete();
            //}

            if (file != null && file.ContentLength > 0 && file.ContentLength < MAXMEGABYTES)
            {
                //get file name
                var fileName = Path.GetFileName(file.FileName);

                //1.Check if the file already exist before create
                if (!System.IO.File.Exists(basePath + fileName))
                {
                    try
                    {
                        /*************************/
                        /**Code to save the file**/
                        /*************************/
                        file.SaveAs(basePath + fileName);

                        //store file location to database
                        offerObj.OfferImageLocation = basePathWithoutServer;

                        //store offer image name
                        offerObj.OfferImageName = fileName;
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.StackTrace.ToString());
                        throw;
                    }
                }
            }

            //1.Add each category the user selects
            foreach (byte item in model.CategoryIds)
                offerObj.Categories.Add(_context.Categories.First(c => c.CategoryId == item));

            //2.Add the offer created to memory
            _context.Offers.Add(offerObj);

            //3.Update the database with the offer
            _context.SaveChanges();

            //1. Ensures that production database has 
            //enough coupon codes generated
            await LoadProductionCoupon.LoadCoupons(model.TotalOffer.Value);

            return RedirectToAction("CreateOffer");
        }

        //Render the Page for Coupon Validation
        public ActionResult RedeemCoupon()
        {
            var userId = User.Identity.GetUserId();

            var getUser = _context.Users.Include(c => c.Merchant).FirstOrDefault(c => c.Id == userId);
            var viewModel = new MerchantRedeemViewModel()
            {
                MerchantId = getUser.Merchant.MerchantID
            };
            return View(viewModel);
        }

        //Method called via ajax to validate coupon
        public ActionResult Validate(MerchantRedeemViewModel viewModel)
        {
            dynamic showMessage = string.Empty;
            var getResults = ValidateCoupon(viewModel);
            showMessage = new
            {
                statusCode = 200,
                Message = getResults,
                Code = viewModel.CouponCode
            };
            return Json(data: showMessage, behavior: JsonRequestBehavior.AllowGet);
        }

        //Me thod containing the logics of checking coupon
        [NonAction]
        private string ValidateCoupon(MerchantRedeemViewModel model)
        {
            //1.Check if coupon code exist for this merchant
            var checkCoupon = _context.ProductionCodes.Include(c => c.Offers).FirstOrDefault(c => c.CouponCode.Replace("-", "") == model.CouponCode.Replace("-", "") && c.IsUsed == false && c.IsActive == true && c.Offers.MerchantID == model.MerchantId);

            if (checkCoupon == null)
                return "Invalid Coupon";

            //Check if max coupons used
            if (checkCoupon.Offers.TotalOffer == checkCoupon.Offers.CouponUsed)
                return "Offer Coupon Exhausted";

            //Check if coupon expires
            var getPurchaseDate = checkCoupon.PurchaseDate;
            var addOneDay = checkCoupon.PurchaseDate.Value.AddHours(24);

            if (addOneDay < DateTime.Now)
                return "Coupon Expired.";

            //Increment coupons used
            checkCoupon.Offers.CouponUsed += 1;
            checkCoupon.IsUsed = true;

            //save changes to the database
            _context.SaveChanges();

            return "Valid Coupon";
        }

        //Renders the Select Offer to Edit Page
        public ActionResult Select()
        {
            var userId = User.Identity.GetUserId();

            var getUser = _context.Users.Include(c => c.Merchant).FirstOrDefault(c => c.Id == userId);

            var viewModel = new Models.SelectOfferViewModel
            {
                Offers = _context.Offers.Include(c => c.Merchant).Where(c => c.MerchantID == getUser.Merchant.MerchantID)
            };
            return View(viewModel);
        }

        [HttpPost]
        public ActionResult Select(SelectOfferViewModel model)
        {
            if (!ModelState.IsValid)
                return View(model);

            var userId = User.Identity.GetUserId();

            var getOffer = _context.Offers.Include(c => c.Merchant).FirstOrDefault(c => c.OfferId == model.OfferId);

            var getUser = _context.Users.Include(c => c.Merchant).FirstOrDefault(c => c.Id == userId);

            var viewModel = new Models.SelectOfferViewModel
            {
                //Offers = _context.Offers.Include(c => c.Merchant).Include(c => c.Categories).Where(c => c.MerchantID == getUser.Merchant.MerchantID),
                Offer = _context.Offers.Include(c => c.Merchant).Include(c => c.Categories).FirstOrDefault(c => c.MerchantID == getUser.Merchant.MerchantID),
                OfferId = model.OfferId
            };
            return Edit(viewModel);

        }

        //Method called after Offer to edit is selected
        public ActionResult Edit(SelectOfferViewModel model)
        {
            var userId = User.Identity.GetUserId();

            var getUser = _context.Users.Include(c => c.Merchant).FirstOrDefault(c => c.Id == userId);

            var getOffer = _context.Offers
                                   .Include(c => c.Merchant)
                                   .Include(c => c.Categories)
                                   .FirstOrDefault(c => c.OfferId == model.OfferId);

            var viewModel = new Models.EditViewModel
            {
                offer = new MerchantCreateOfferViewModel
                {
                    OfferId = getOffer.OfferId,
                    CouponDurationInMonths = getOffer.CouponDurationInMonths,
                    CouponPrice = getOffer.CouponPrice,
                    DiscountRate = getOffer.DiscountRate,
                    MerchantID = getOffer.Merchant.MerchantID,
                    OfferBegins = getOffer.OfferBegins,
                    OfferEnds = getOffer.OfferEnds,
                    OfferDetails = getOffer.OfferDetails,
                    OfferName = getOffer.OfferName,
                    TotalOffer = getOffer.TotalOffer,
                    Categories = new List<Category>(), //Instantiate the category list
                }
            };
            //Sets the categories
            viewModel.offer.Categories = _context.Categories.ToList();
            viewModel.OfferCategories = new List<Category>();
            viewModel.OfferCategories = getOffer.Categories.ToList();
            Session["SelectedCategories"] = getOffer.Categories;
            return View("Edit", viewModel);
        }

 
        [HttpPost]
        public ActionResult Edit(EditViewModel model)
        {
            var userId = User.Identity.GetUserId();

            //retrieve upload file
            var file = Request.Files.Count > 0 ? Request.Files["OfferImg"]:null;

            if (model == null)
                return RedirectToAction("CreateOffer");
            //return View("CreateOffer");

            //Checks if offer has Id
            if (model.offer.OfferId.HasValue)
            {
                var editOffer = _context.Offers.Include(c => c.Merchant).Include(c =>c.Categories).FirstOrDefault(c => c.OfferId == model.offer.OfferId);

                //path on file system
                var basePath = Server.MapPath(@"~\Content\images\" + userId + @"\" + editOffer.OfferName + @"\");
                
                //path stored in database
                var basePathWithoutServer = @"~\Content\images\" + userId + @"\" + editOffer.OfferName + @"\";

                if (!Directory.Exists(basePath))
                    Directory.CreateDirectory(basePath);

                //Check if new file has has the same name as the old file before changing.
                if(editOffer.OfferImageName != Path.GetFileName(file.FileName))
                {
                    if (file != null && file.ContentLength > 0 && file.ContentLength < MAXMEGABYTES)
                    {
                        //get the name of the file
                        var fileName = Path.GetFileName(file.FileName);
                        if (!System.IO.File.Exists(basePath + fileName))
                        {
                            //Delete previous file from file system
                            //Permission to delete has to be granted on the file system
                            //var files = new DirectoryInfo(basePath);
                            //foreach (var item in files.GetFiles())
                            //    item.Delete();

                            file.SaveAs(basePath + fileName);

                            //Store file location to database
                            editOffer.OfferImageLocation = basePathWithoutServer;

                            //store file name to database
                            editOffer.OfferImageName = fileName;
                        }
                    }
                }

                editOffer.DiscountRate = model.offer.DiscountRate.Value;
                editOffer.OfferBegins = model.offer.OfferBegins.Value;
                editOffer.OfferEnds = model.offer.OfferEnds.Value;
                editOffer.OfferDetails = model.offer.OfferDetails;
                editOffer.TotalOffer = model.offer.TotalOffer;
                editOffer.OfferName = model.offer.OfferName;
                editOffer.CouponDurationInMonths = model.offer.CouponDurationInMonths.Value;
                editOffer.CouponPrice = model.offer.CouponPrice.Value;

                editOffer.Categories = new List<Category>();

                //Checks for new category to add to Category.
                if (model.CategoryIds != null)
                    foreach (var item in model.CategoryIds)
                        if (!editOffer.Categories.Any(c => c.CategoryId == item))
                            editOffer.Categories.Add(_context.Categories.Single(c => c.CategoryId == item));

                //Call to save the changes to database object
                _context.SaveChanges();

                TempData["result"] = "success";
                //Return to create offer
                return RedirectToAction("CreateOffer");
            }

            //Return Select if something went wrong
            return View("Select");
        }

    }
}