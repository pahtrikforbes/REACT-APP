namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddPackagePriceToCouponValidationPackage : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.CouponValidationPackages", "PackagePrice", c => c.Decimal(nullable: false, storeType: "money"));
        }
        
        public override void Down()
        {
            DropColumn("dbo.CouponValidationPackages", "PackagePrice");
        }
    }
}
