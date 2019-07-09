namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemoveCouponPriceFromOffersTable : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Offers", "CouponPrice");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Offers", "CouponPrice", c => c.Decimal(nullable: false, storeType: "money"));
        }
    }
}
