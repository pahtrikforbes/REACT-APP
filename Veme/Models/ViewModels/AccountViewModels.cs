using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Veme.Models.CustomValidation;
using Veme.Models.POCO;

namespace Veme.Models
{
    public class ExternalLoginConfirmationViewModel
    {
        [Required]
        [Display(Name = "Email")]
        public string Email { get; set; }
    }
    public class ExternalLoginConfirmationMerchantViewModel
    {
        [Required]
        [MaxLength(50)]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Street Address 1")]
        [MaxLength(50)]
        public string StreetAddress1 { get; set; }

        [Display(Name = "Street Address 2")]
        [MaxLength(50)]
        [DisplayFormat(ConvertEmptyStringToNull = false)]
        public string StreetAddress2 { get; set; }

        [Required]
        [MaxLength(50)]
        public string City { get; set; }

        [Required]
        [MaxLength(50)]
        public string Parish { get; set; }

        [Required]
        [MaxLength(50)]
        public string Country { get; set; }

        [Required]
        [MaxLength(50)]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Required]
        [MaxLength(50)]
        [Display(Name = "Company Name")]
        public string CompanyName { get; set; }

        [MaxLength(255)]
        [Display(Name = "Company Website")]
        //[Url(ErrorMessage ="Invalid Website Format")]
        [DisplayFormat(ConvertEmptyStringToNull = false)]
        public string CompanyWebsite { get; set; }

        [Required]
        [MaxLength(12)]
        [Display(Name = "Phone Number")]
        //[RegularExpression(@"\d{3}[-]+\d{3}[-]+\d{4}/gm", ErrorMessage = "Invalid Format")]
        public string PhoneNumber { get; set; }

        [MaxLength(255)]
        [Display(Name = "Company Description")]
        public string CompanyDescription { get; set; }

        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [EmailAddress]
        [Display(Name = "Confirm Email")]
        [Compare("Email", ErrorMessage = "The email and confirmation email do not match.")]
        public string ConfirmEmail { get; set; }

    }

    public class ExternalLoginConfirmationCustomerViewModel
    {
        [Required]
        [MaxLength(50)]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Last Name")]
        [MaxLength(50)]
        public string LastName { get; set; }

        [Required]
        [Display(Name = "Date of Birth")]
        [DataType(DataType.Date)]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}")]
        public DateTime? DOB { get; set; }

        [Required]
        [StringLength(12)]
        public string MobileNumber { get; set; }

        [Required]
        //[EmailAddress]
        [Display(Name = "Email")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required]
        //[EmailAddress]
        [DataType(DataType.EmailAddress)]
        [Display(Name = "Confirm Email")]
        [Compare("Email", ErrorMessage = "Email & Confirmation email must match.")]
        public string ConfirmEmail { get; set; }

    }


    public class ExternalLoginListViewModel
    {
        public string ReturnUrl { get; set; }
        public string Subcriber { get; set; }
    }

    public class SendCodeViewModel
    {
        public string SelectedProvider { get; set; }
        public ICollection<System.Web.Mvc.SelectListItem> Providers { get; set; }
        public string ReturnUrl { get; set; }
        public bool RememberMe { get; set; }
    }

    public class VerifyCodeViewModel
    {
        [Required]
        public string Provider { get; set; }

        [Required]
        [Display(Name = "Code")]
        public string Code { get; set; }
        public string ReturnUrl { get; set; }

        [Display(Name = "Remember this browser?")]
        public bool RememberBrowser { get; set; }

        public bool RememberMe { get; set; }
    }

    public class ForgotViewModel
    {
        [Required]
        [Display(Name = "Email")]
        public string Email { get; set; }
    }

    public class LoginViewModel
    {
        [Required]
        [Display(Name = "Email")]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [Display(Name = "Remember me?")]
        public bool RememberMe { get; set; }
    }
    //for customer registration
    public class CustomerRegisterViewModel
    {
        [Required]
        [Display(Name = "Accept Terms & Condition")]
        public bool IsCheck { get; set; }

        [Required]
        [MaxLength(50)]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Last Name")]
        [MaxLength(50)]
        public string LastName { get; set; }

        [Required]
        [Display(Name = "Date of Birth")]
        public DateTime DOB { get; set; }

        [Required]
        [StringLength(12)]
        public string MobileNumber { get; set; }

        [Required]
        //[EmailAddress]
        [Display(Name = "Email")]
        [CheckEmailExistValidator]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required]
        //[EmailAddress]
        [DataType(DataType.EmailAddress)]
        [Display(Name = "Confirm Email")]
        [Compare("Email", ErrorMessage = "Email & Confirmation email must match.")]
        public string ConfirmEmail { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }
    }


    //View Model to control customer Registration
    public class RegisterViewModel
    {
        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [EmailAddress]
        [Display(Name = "Confirm Email")]
        [Compare("Email", ErrorMessage = "The email and confirmation email do not match.")]
        public string ConfirmEmail { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }
    }

    //View Model to control Merchant Registration
    public class RegisterMerchantViewModel
    {
        [Required]
        [MaxLength(50)]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        //[Required]
        //public MerchantAddress MerchantAddress { get; set; }

        [Required]
        [Display(Name ="Street Address 1")]
        [MaxLength(50)]
        public string StreetAddress1 { get; set; }

        [Display(Name = "Street Address 2")]
        [MaxLength(50)]
        [DisplayFormat(ConvertEmptyStringToNull = false)]
        public string StreetAddress2 { get; set; }

        [Required]
        [MaxLength(50)]
        public string City { get; set; }

        [Required]
        [MaxLength(50)]
        public string Parish { get; set; }

        [Required]
        [MaxLength(50)]
        public string Country { get; set; }

        [Required]
        [MaxLength(50)]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Required]
        [MaxLength(50)]
        [Display(Name ="Company Name")]
        public string CompanyName { get; set; }

        [MaxLength(255)]
        [Display(Name = "Company Website")]
        //[Url(ErrorMessage ="Invalid Website Format")]
        [DisplayFormat(ConvertEmptyStringToNull = false)]
        public string CompanyWebsite { get; set; }

        [Required]
        [MaxLength(12)]
        [Display(Name = "Phone Number")]
        //[RegularExpression(@"\d{3}[-]+\d{3}[-]+\d{4}/gm", ErrorMessage = "Invalid Format")]
        public string PhoneNumber { get; set; }

        [MaxLength(255)]
        [Display(Name = "Company Description")]
        public string CompanyDescription { get; set; }

        [Required]
        [EmailAddress]
        [CheckEmailExistValidator]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [EmailAddress]
        [Display(Name = "Confirm Email")]
        [Compare("Email", ErrorMessage = "The email and confirmation email do not match.")]
        public string ConfirmEmail { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        [Required]
        public string ConfirmPassword { get; set; }
    }


    public class ResetPasswordViewModel
    {
        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }

        public string Code { get; set; }
    }

    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }
    }
}
