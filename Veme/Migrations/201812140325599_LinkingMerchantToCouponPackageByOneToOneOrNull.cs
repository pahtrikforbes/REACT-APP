namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LinkingMerchantToCouponPackageByOneToOneOrNull : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Merchants", "PackageId", c => c.Int(nullable:true));
            CreateIndex("dbo.Merchants", "PackageId");
            AddForeignKey("dbo.Merchants", "PackageId", "dbo.CouponValidationPackages", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Merchants", "PackageId", "dbo.CouponValidationPackages");
            DropIndex("dbo.Merchants", new[] { "PackageId" });
            DropColumn("dbo.Merchants", "PackageId");
        }
    }
}
