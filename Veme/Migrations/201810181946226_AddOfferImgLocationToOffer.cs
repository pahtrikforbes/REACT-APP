namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddOfferImgLocationToOffer : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Offers", "OfferImageLocation", c => c.String(maxLength: 450));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Offers", "OfferImageLocation");
        }
    }
}
