using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;

namespace Veme.IdentityExtensions
{
    public class CustomPasswordValidator : IIdentityValidator<string>
    {
        public int RequiredLength { get; set; }
        public bool RequireNonLetterOrDigit { get; set; }
        public bool RequireDigit { get; set; }
        public bool RequireLowercase { get; set; }
        public bool RequireUppercase { get; set; }

        //public CustomPasswordValidator(int length)
        //{
        //    RequiredLength = length;
        //}

        Task<IdentityResult> IIdentityValidator<string>.ValidateAsync(string item)
        {
            if (String.IsNullOrEmpty(item) || item.Length < RequiredLength)
                return Task.FromResult(IdentityResult.Failed(String.Format("Password should be of length {0}", RequiredLength)));

            string pattern = @"^(?=.*[0-9])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*0-9]{10,}$";

            if (!Regex.IsMatch(item, pattern) && RequireNonLetterOrDigit)
            {
                var checkNumber = item.Any(char.IsDigit);
                if (!checkNumber && RequireDigit)
                    return Task.FromResult(IdentityResult.Failed("Password must have atleast one digit."));

                return Task.FromResult(IdentityResult.Failed("Password must contain at least one symbol e.g. ! @ # $"));
            }

            //var checkSymbol = item.Any(char.IsSymbol);
            //if(!checkSymbol && RequireNonLetterOrDigit)
            //    return Task.FromResult(IdentityResult.Failed("Password must contain at least one symbol e.g. ! @ # $"));

            var checkUpperCase = item.Any(char.IsUpper);
            if (!checkUpperCase && RequireUppercase)
                return Task.FromResult(IdentityResult.Failed("Password must have atleast one upper case letter."));

            //string upperCasePattern = @"[A-Z]";
            //if (!Regex.IsMatch(item, upperCasePattern) && RequireUppercase)



            //string lowerCasePattern = @"([a-z])+/gm";
            //if (!Regex.IsMatch(item, lowerCasePattern) && RequireLowercase)

            var checkLowerCase = item.Any(char.IsLower);
            if (!checkLowerCase && RequireLowercase)
                return Task.FromResult(IdentityResult.Failed("Password must have atleast one lower case letter."));

            return Task.FromResult(IdentityResult.Success);
        }
    }
}