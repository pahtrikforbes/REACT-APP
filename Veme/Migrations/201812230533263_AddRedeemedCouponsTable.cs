namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddRedeemedCouponsTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.RedeemedCoupons",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        MerchantId = c.String(),
                        OfferId = c.Int(nullable: false),
                        CustomerId = c.String(),
                        RedeemDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Merchants", "RedeemedCoupon_Id", c => c.Int());
            AddColumn("dbo.Offers", "RedeemedCoupon_Id", c => c.Int());
            AddColumn("dbo.Customers", "RedeemedCoupon_Id", c => c.Int());
            CreateIndex("dbo.Merchants", "RedeemedCoupon_Id");
            CreateIndex("dbo.Offers", "RedeemedCoupon_Id");
            CreateIndex("dbo.Customers", "RedeemedCoupon_Id");
            AddForeignKey("dbo.Customers", "RedeemedCoupon_Id", "dbo.RedeemedCoupons", "Id");
            AddForeignKey("dbo.Merchants", "RedeemedCoupon_Id", "dbo.RedeemedCoupons", "Id");
            AddForeignKey("dbo.Offers", "RedeemedCoupon_Id", "dbo.RedeemedCoupons", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Offers", "RedeemedCoupon_Id", "dbo.RedeemedCoupons");
            DropForeignKey("dbo.Merchants", "RedeemedCoupon_Id", "dbo.RedeemedCoupons");
            DropForeignKey("dbo.Customers", "RedeemedCoupon_Id", "dbo.RedeemedCoupons");
            DropIndex("dbo.Customers", new[] { "RedeemedCoupon_Id" });
            DropIndex("dbo.Offers", new[] { "RedeemedCoupon_Id" });
            DropIndex("dbo.Merchants", new[] { "RedeemedCoupon_Id" });
            DropColumn("dbo.Customers", "RedeemedCoupon_Id");
            DropColumn("dbo.Offers", "RedeemedCoupon_Id");
            DropColumn("dbo.Merchants", "RedeemedCoupon_Id");
            DropTable("dbo.RedeemedCoupons");
        }
    }
}
