using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DTG.API.Migrations
{
    public partial class SeedDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('Volvo')");
            migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('Volkswagen')");
            migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('Acura')");

            migrationBuilder.Sql("INSERT INTO Models (Name, MakeID) VALUES ('XC 40', (SELECT ID FROM Makes WHERE Name = 'Volvo'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeID) VALUES ('S-Class', (SELECT ID FROM Makes WHERE Name = 'Volvo'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeID) VALUES ('XJ', (SELECT ID FROM Makes WHERE Name = 'Volvo'))");

            migrationBuilder.Sql("INSERT INTO Models (Name, MakeID) VALUES ('Passat', (SELECT ID FROM Makes WHERE Name = 'Volkswagen'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeID) VALUES ('CC', (SELECT ID FROM Makes WHERE Name = 'Volkswagen'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeID) VALUES ('Jetta', (SELECT ID FROM Makes WHERE Name = 'Volkswagen'))");

            migrationBuilder.Sql("INSERT INTO Models (Name, MakeID) VALUES ('RLX', (SELECT ID FROM Makes WHERE Name = 'Acura'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeID) VALUES ('ILX', (SELECT ID FROM Makes WHERE Name = 'Acura'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeID) VALUES ('TLX', (SELECT ID FROM Makes WHERE Name = 'Acura'))");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Makes WHERE Name IN ('Volvo', 'Volkswagen', 'Acura')");
        }
    }
}
