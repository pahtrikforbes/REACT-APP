namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;

    public partial class SetMoneyAsCouponPriceDataType : DbMigration
    {
        public override void Up()
        {
            //Sql(@"ALTER TABLE Offers DROP CONSTRAINT 'DF__Offers__CouponPr__3B75D760'");
            DropConstraint();
            AlterColumn("dbo.Offers", "CouponPrice", c => c.Decimal(nullable: false, storeType: "money"));
        }

        private void DropConstraint()
        {
            Sql(@"DECLARE @var0 nvarchar(128)
                  Select @var0 = name
                  FROM sys.default_constraints
                  WHERE parent_object_id = object_id(N'dbo.Offers')
                  --AND col_name(parent_object_id, parent_column_id) = 'CouponPrice';
                  IF @var0 IS NOT NULL
                  EXECUTE('ALTER TABLE [dbo].[Offers] DROP CONSTRAINT [' + @var0 + ']')
                ");
        }
        public override void Down()
        {
            AlterColumn("dbo.Offers", "CouponPrice", c => c.Int(nullable: false));
        }
    }
}
