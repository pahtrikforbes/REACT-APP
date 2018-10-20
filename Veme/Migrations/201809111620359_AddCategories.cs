namespace Veme.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddCategories : DbMigration
    {
        public override void Up()
        {
            //Adds all the categories
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Automotive & Powersports')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Baby Products (excluding apparel)')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Beauty')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Books')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Camera & Photo')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Cell Phones & Accessories')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Consumer Electronics')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Entertainment Collectibles')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Grocery & Gourmet Food')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Health & Personal Care')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Home & Garden')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Industrial & Scientific')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Major Appliances')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Music')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Musical Instruments')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Office Products')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Outdoors')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Personal Computers')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Pet Supplies')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Software')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Sports')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Sports Collectibles')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Tools & Home Improvement')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Toys & Games')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Video, DVD & Blu-ray')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Video Games')");
            Sql("INSERT INTO Categories(CategoryName) VALUES ('Watches')");
        }

        public override void Down()
        {
            //Deletes all the categories added
            Sql("Delete FROM Categories WHERE CategoryName ='Automotive & Powersports'");
            Sql("Delete FROM Categories WHERE CategoryName ='Baby Products (excluding apparel)'");
            Sql("Delete FROM Categories WHERE CategoryName ='Books'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Beauty'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Camera & Photo'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Cell Phones & Accessories'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Consumer Electronics'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Entertainment Collectibles'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Grocery & Gourmet Food'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Health & Personal Care'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Home & Garden'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Industrial & Scientific'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Major Appliances'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Music'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Musical Instruments'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Office Products'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Outdoors'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Personal Computers'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Pet Supplies'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Software'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Sports'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Sports Collectibles'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Tools & Home Improvement'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Toys & Games'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Video, DVD & Blu-ray'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Video Games'");
            Sql("Delete FROM Categories WHERE CategoryName = 'Watches'");

        }
    }
}
