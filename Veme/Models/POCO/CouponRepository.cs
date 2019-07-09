using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Veme.Models.POCO
{
    public class CouponRepository
    {
        public int CouponRepositoryID { get; set; }

        [StringLength(12)]
        [Index(IsUnique = true)]
        public string CouponCode { get; set; }

        [DefaultValue("false")]
        public bool InProduction { get; set; }

    }

}