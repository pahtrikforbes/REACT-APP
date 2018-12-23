namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Updatedatabase : DbMigration
    {
        public override void Up()
        {
            //AddColumn("dbo.ProductionCodes", "PurchaseDate", c => c.DateTime());
        }
        
        public override void Down()
        {
            //DropColumn("dbo.ProductionCodes", "PurchaseDate");
        }
    }
}
