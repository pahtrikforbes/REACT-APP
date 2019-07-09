namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ManyToManyRelationshipbetweenOfferandCategory : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.OfferCategories",
                c => new
                    {
                        Offer_OfferId = c.Int(nullable: false),
                        Category_CategoryId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Offer_OfferId, t.Category_CategoryId })
                .ForeignKey("dbo.Offers", t => t.Offer_OfferId, cascadeDelete: true)
                .ForeignKey("dbo.Categories", t => t.Category_CategoryId, cascadeDelete: true)
                .Index(t => t.Offer_OfferId)
                .Index(t => t.Category_CategoryId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.OfferCategories", "Category_CategoryId", "dbo.Categories");
            DropForeignKey("dbo.OfferCategories", "Offer_OfferId", "dbo.Offers");
            DropIndex("dbo.OfferCategories", new[] { "Category_CategoryId" });
            DropIndex("dbo.OfferCategories", new[] { "Offer_OfferId" });
            DropTable("dbo.OfferCategories");
        }
    }
}
