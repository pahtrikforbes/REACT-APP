namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;

    public partial class SeedCouponValidationPackage : DbMigration
    {
        public override void Up()
        {
            Sql(@"INSERT INTO[dbo].[CouponValidationPackages] ([PackageName], [Quantity], [PackagePrice]) VALUES(N'Bronze', 100, CAST(12500.0000 AS Money))");
            Sql(@"INSERT INTO[dbo].[CouponValidationPackages] ([PackageName], [Quantity], [PackagePrice]) VALUES(N'Silver', 500, CAST(56250.0000 AS Money))");
            Sql(@"INSERT INTO[dbo].[CouponValidationPackages] ([PackageName], [Quantity], [PackagePrice]) VALUES(N'Gold', 1000, CAST(100000.0000 AS Money))");
        }

        public override void Down()
        {
            Sql(@"DELETE FROM [dbo].[CouponValidationPackages]");
        }
    }
}
