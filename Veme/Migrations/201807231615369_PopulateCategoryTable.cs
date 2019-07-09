namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PopulateCategoryTable : DbMigration
    {
        public override void Up()
        {
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Food & Beverages')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('SPA')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Hotels')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Fashion & Clothing')");
            //Sql("INSERT INTO Categories(CategoryName) VALUES ('Groceries')");
            //Sql("INSERT INTO Categories(CategoryName) VALUES ('Automotives')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Home & Kitchen')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Electronics')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Men')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Female')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Kids')");

        }

        public override void Down()
        {
        }
    }
}
