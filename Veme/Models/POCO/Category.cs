using System.Collections.Generic;

namespace Veme.Models.POCO
{
    public class Category
    {
        public int CategoryId { get; set; }

        public string CategoryName { get; set; }

        //Create Many-to-many relationship between merchant and Offer
        public virtual ICollection<Merchant> Merchants { get; set; }

        //Create Many-to-many relationship between offer and category
        public virtual ICollection<Offer> Offers { get; set; }
    }
}