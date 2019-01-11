namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemoveCouponDurationInMonthsColumnFromOffersTable : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Offers", "CouponDurationInMonths");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Offers", "CouponDurationInMonths", c => c.Byte(nullable: false));
        }
    }
}
