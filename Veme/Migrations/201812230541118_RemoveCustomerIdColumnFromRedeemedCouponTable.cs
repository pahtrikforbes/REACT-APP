namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemoveCustomerIdColumnFromRedeemedCouponTable : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Customers", "RedeemedCoupon_Id", "dbo.RedeemedCoupons");
            DropIndex("dbo.Customers", new[] { "RedeemedCoupon_Id" });
            DropColumn("dbo.Customers", "RedeemedCoupon_Id");
            DropColumn("dbo.RedeemedCoupons", "CustomerId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.RedeemedCoupons", "CustomerId", c => c.String());
            AddColumn("dbo.Customers", "RedeemedCoupon_Id", c => c.Int());
            CreateIndex("dbo.Customers", "RedeemedCoupon_Id");
            AddForeignKey("dbo.Customers", "RedeemedCoupon_Id", "dbo.RedeemedCoupons", "Id");
        }
    }
}
