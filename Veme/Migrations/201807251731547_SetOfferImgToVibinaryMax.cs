namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SetOfferImgToVibinaryMax : DbMigration
    {
        public override void Up()
        {
            Sql(@"
                 Alter TABLE Offers
                 Alter COLUMN OfferImg varbinary(max)
                ");
        }
        
        public override void Down()
        {
        }
    }
}
