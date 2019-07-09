namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AllowPurchaseCouponToAcceptDateAndTime : DbMigration
    {
        public override void Up()
        {
            //Change Data type to DateTime
            AlterColumn("dbo.ProductionCodes", "PurchaseDate", c => c.DateTime(nullable:true));
        }
        
        public override void Down()
        {
            //Revert back to Data type date
            AlterColumn("dbo.ProductionCodes", "PurchaseDate", c => c.DateTime(nullable: true,storeType:"date"));
        }
    }
}
