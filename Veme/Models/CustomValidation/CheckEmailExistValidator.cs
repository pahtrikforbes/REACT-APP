using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Veme.Models.CustomValidation
{
    public class CheckEmailExistValidator : ValidationAttribute
    {
        private ApplicationDbContext _context = new ApplicationDbContext();

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var email = value.ToString();
            var user = _context.Users.FirstOrDefault(c => c.Email == email);

            if (user == null)
                return ValidationResult.Success;

            return new ValidationResult(string.Format("{0} is already registered.", email));
            //return base.IsValid(value, validationContext);
        }
    }
}