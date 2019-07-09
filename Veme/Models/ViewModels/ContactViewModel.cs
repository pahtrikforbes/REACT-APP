using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Veme.Models.ViewModels
{
    public class ContactViewModel
    {
        [MaxLength(30)]
        [Required(ErrorMessage = "Required *")]
        public string Name { get; set; }

        [EmailAddress]
        [Required(ErrorMessage = "Required *")]
        public string Email { get; set; }

        [MaxLength(13)]
        [Required(ErrorMessage = "Required *")]
        public string PhoneNumber { get; set; }

        [MaxLength(20)]
        [Required(ErrorMessage = "Required *")]
        public string Subject { get; set; }

        [MaxLength(255)]
        [Required(ErrorMessage = "Required *")]
        public string Message { get; set; }
    }
}