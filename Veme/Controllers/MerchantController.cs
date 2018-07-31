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


        //GET: // Create Offer
        public ActionResult CreateOffer()
        {
            var userId = User.Identity.GetUserId();
            var getUser = _context.Users.Include(c => c.Merchant).FirstOrDefault(c => c.Id == userId);

            //Gets a set the Merchant Id to the page
            var viewModel = new MerchantCreateOfferViewModel();
            viewModel.MerchantID = getUser.Merchant.MerchantID;
            viewModel.Merchant = getUser.Merchant;

            //1.Initialize the category list
            viewModel.Categories = new List<Category>();

            //2.Fetch the list of available Categories
            viewModel.Categories = _context.Categories.ToList();
            return View(viewModel);
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
            var file = Request.Files.Count > 0 ? Request.Files["OfferImg"] : null;

            if (model == null)
                return RedirectToAction("CreateOffer");//return View("CreateOffer");
           
            #region Has Value
            //Checks if offer has Id
            //if (model.OfferId.HasValue)
            //{
            //    var editOffer = _context.Offers.FirstOrDefault(c => c.OfferId == model.OfferId);
            //    editOffer.DiscountRate = model.DiscountRate.Value;
            //    editOffer.OfferBegins = model.OfferBegins.Value;
            //    editOffer.OfferEnds = model.OfferEnds.Value;
            //    editOffer.OfferDetails = model.OfferDetails;
            //    editOffer.TotalOffer = model.TotalOffer;
            //    editOffer.OfferName = model.OfferName;
            //    editOffer.Merchant.MerchantID = model.Merchant.MerchantID;
            //    //uncomment to add offer image to database
            //    //editOffer.OfferImg = model.ConvertImgToByteArray();//convert image file to byte array
            //    editOffer.CouponDurationInMonths = model.CouponDurationInMonths.Value;
            //    editOffer.CouponPrice = model.CouponPrice.Value;
            //    editOffer.Merchant = model.Merchant;

            //    return RedirectToAction("CreateOffer");
            //}
            #endregion

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
                //uncomment to add offer image to database
                //OfferImg = model.ConvertImgToByteArray(),//convert image file to byte array
                CouponDurationInMonths = model.CouponDurationInMonths.Value,
                CouponPrice = model.CouponPrice.Value,
                Categories = new List<Category>()
            };
            //for storing img to file
            var basePath = Server.MapPath("~/Content/FileUpload/" + userId + @"/OfferImg/" + offerObj.OfferName + "/");

            if (!Directory.Exists(basePath))
                Directory.CreateDirectory(basePath);

            if (file != null && file.ContentLength > 0 && file.ContentLength < MAXMEGABYTES)
            {
                //get file name
                var fileName = Path.GetFileName(file.FileName);
                if (!System.IO.File.Exists(basePath + fileName))
                {
                    var files = new DirectoryInfo(basePath);
                    foreach (var item in files.GetFiles())
                        item.Delete();

                    file.SaveAs(basePath + fileName);
                    //System.IO.File.WriteAllBytes(basePath, ImgManipulator.ConvertImgToByteArray(file));
                }
            }

            //Add each category the user selects
            foreach (byte item in model.CategoryIds)
                offerObj.Categories.Add(_context.Categories.First(c => c.CategoryId == item));

            _context.Offers.Add(offerObj);
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
            #region
            //if (!ModelState.IsValid)
            //{
            //    showMessage = new
            //    {
            //        statusCode = 404,
            //        Message = "Oops!"
            //    };
            //    return Json(showMessage, JsonRequestBehavior.AllowGet);
            //}
            #endregion
            var getResults = ValidateCoupon(viewModel);
            showMessage = new
            {
                statusCode = 200,
                Message = getResults//"Coupon Valid"
            };
            return Json(data: showMessage, behavior: JsonRequestBehavior.AllowGet);
        }

        //MEthod containing the logics of checking coupon
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

            //Increment coupons used
            checkCoupon.Offers.CouponUsed += 1;
            checkCoupon.IsUsed = true;

            //save changes to the database
            _context.SaveChanges();

            return "Valid Coupon";
        }

        //for offer edit
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
                    Categories = new List<Category>() //Instantiate the category list
                }
            };
            //Sets the categories
            viewModel.offer.Categories = _context.Categories.ToList();
            viewModel.OfferCategories = new List<Category>();
            viewModel.OfferCategories = getOffer.Categories.ToList();
            Session["SelectedCategories"] = getOffer.Categories;
            return View("Edit", viewModel);
        }

        //Select Offer
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
            var userId = User.Identity.GetUserId();

            var getOffer = _context.Offers.Include(c => c.Merchant).FirstOrDefault(c => c.OfferId == model.OfferId);

            var getUser = _context.Users.Include(c => c.Merchant).FirstOrDefault(c => c.Id == userId);

            var viewModel = new Models.SelectOfferViewModel
            {
                Offers = _context.Offers.Include(c => c.Merchant).Include(c => c.Categories).Where(c => c.MerchantID == getUser.Merchant.MerchantID),
                OfferId = model.OfferId
            };
            //return RedirectToAction("Edit",viewModel);
            return Edit(viewModel);
        }

        [HttpPost]
        public ActionResult Edit(EditViewModel model)
        {
            var userId = User.Identity.GetUserId();

            //retrieve upload file
            var file = Request.Files.Count > 0 ? Request.Files["OfferImg"]:null;

            //if (Request.Files.Count > 0)
            //{
            //    //var file = Request.Files["OfferImg"];
            //    if (file != null && file.ContentLength > 0 && file.ContentLength < MAXMEGABYTES)
            //    {
            //        var fileName = Path.GetFileName(file.FileName);
            //        model.offer.OfferImg = file;
            //        //var path = Path.Combine(Server.MapPath("~/Content"));
            //    }
            //}

            if (model == null)
                return RedirectToAction("CreateOffer");//return View("CreateOffer");

            //Checks if offer has Id
            if (model.offer.OfferId.HasValue)
            {
                var editOffer = _context.Offers.Include(c => c.Merchant).Include(c =>c.Categories).FirstOrDefault(c => c.OfferId == model.offer.OfferId);
                var basePath = Server.MapPath("~/Content/FileUpload/" + userId + @"/OfferImg/"+editOffer.OfferName+"/");

                if (!Directory.Exists(basePath))
                    Directory.CreateDirectory(basePath);

                if (file != null && file.ContentLength > 0 && file.ContentLength < MAXMEGABYTES)
                {
                    //get file name
                    var fileName = Path.GetFileName(file.FileName);
                    if(!System.IO.File.Exists(basePath + fileName))
                    {
                        var files = new DirectoryInfo(basePath);
                        foreach (var item in files.GetFiles())
                            item.Delete();

                        file.SaveAs(basePath + fileName);
                        //System.IO.File.WriteAllBytes(basePath, ImgManipulator.ConvertImgToByteArray(file));
                    }
                }

                editOffer.DiscountRate = model.offer.DiscountRate.Value;
                editOffer.OfferBegins = model.offer.OfferBegins.Value;
                editOffer.OfferEnds = model.offer.OfferEnds.Value;
                editOffer.OfferDetails = model.offer.OfferDetails;
                editOffer.TotalOffer = model.offer.TotalOffer;
                editOffer.OfferName = model.offer.OfferName;
                //editOffer.Merchant.MerchantID = model.offer.Merchant.MerchantID;
                
                //uncomment to add offer image to database
                //Gets the byte array of the image
                //if (model.offer.OfferImg != null)
                //    editOffer.OfferImg = ImgManipulator.ConvertImgToByteArray(model.offer.OfferImg);
                    //editOffer.OfferImg = model.offer.ConvertImgToByteArray();//convert image file to byte array

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

                //Return to 
                return RedirectToAction("CreateOffer");
            }

            //Return Select if something went wrong
            return View("Select");
        }

    }
}