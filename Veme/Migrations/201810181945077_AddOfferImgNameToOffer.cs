namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddOfferImgNameToOffer : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Offers", "OfferImageName", c => c.String(maxLength: 100));
            DropColumn("dbo.Offers", "OfferImg");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Offers", "OfferImg", c => c.Binary());
            DropColumn("dbo.Offers", "OfferImageName");
        }
    }
}
