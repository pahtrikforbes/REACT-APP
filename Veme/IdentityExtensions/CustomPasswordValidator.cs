using Microsoft.AspNet.Identity;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Veme.IdentityExtensions
{
    public class CustomPasswordValidator : IIdentityValidator<string>
    {
        public int RequiredLength { get; set; }
        public bool RequireNonLetterOrDigit { get; set; }
        public bool RequireDigit { get; set; }
        public bool RequireLowercase { get; set; }
        public bool RequireUppercase { get; set; }

        Task<IdentityResult> IIdentityValidator<string>.ValidateAsync(string item)
        {
            //check the length
            if (String.IsNullOrEmpty(item) || item.Length < RequiredLength)
                return Task.FromResult(IdentityResult.Failed(String.Format("Password should be of length {0}", RequiredLength)));

            //check number
            var HasNumber = item.Any(char.IsDigit);
            if(!HasNumber && RequireNonLetterOrDigit)
                return Task.FromResult(IdentityResult.Failed("Password must have atleast one digit."));

            //check symbol
            var HasSpecialChars = item.Any(c => !Char.IsLetterOrDigit(c));
            if(!HasSpecialChars)
                return Task.FromResult(IdentityResult.Failed("Password must contain at least one symbol e.g. ! @ # $"));


            //check upper case
            var checkUpperCase = item.Any(char.IsUpper);
            if (!checkUpperCase && RequireUppercase)
                return Task.FromResult(IdentityResult.Failed("Password must have atleast one upper case letter."));

            //check lower case
            var checkLowerCase = item.Any(char.IsLower);
            if (!checkLowerCase && RequireLowercase)
                return Task.FromResult(IdentityResult.Failed("Password must have atleast one lower case letter."));

            return Task.FromResult(IdentityResult.Success);
        }
    }
}