namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateTableForCouponValidationPackages : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CouponValidationPackages",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        PackageName = c.String(nullable: false, maxLength: 100),
                        Quantity = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.CouponValidationPackages");
        }
    }
}
