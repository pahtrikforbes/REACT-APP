namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddPurchaseDateToProductionCode : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ProductionCodes","PurchaseDate",c => c.DateTime(nullable:true,storeType:"date"));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ProductionCodes", "PurchaseDate");
        }
    }
}
