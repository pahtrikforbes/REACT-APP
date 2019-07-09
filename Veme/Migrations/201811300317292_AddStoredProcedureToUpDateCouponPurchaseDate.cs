namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddStoredProcedureToUpDateCouponPurchaseDate : DbMigration
    {
        public override void Up()
        {
            Sql(@"Create Proc dbo.SetCouponCodePurchaseDateTimeById
                  @ProductionCodeID int
                  AS
	                  BEGIN
			                Update [dbo].[ProductionCodes]
			                SET [PurchaseDate] = getdate()
			                WHERE [ProductionCodeID] = @ProductionCodeID
	                  END
            ");
        }
        
        public override void Down()
        {
            //DropStoredProcedure("dbo.SetCouponCodePurchaseDateTimeById");
            //Drop the stored procedure
            Sql(@"DROP PROCEDURE [dbo].[SetCouponCodePurchaseDateTimeById]");
        }
    }
}
