namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddValidationCallsColumnToMerchantTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Merchants", "ValidationCallsMade", c => c.Int(nullable:true));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Merchants", "ValidationCallsMade");
        }
    }
}
