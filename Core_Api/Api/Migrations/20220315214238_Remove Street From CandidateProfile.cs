using Microsoft.EntityFrameworkCore.Migrations;

namespace Api.Migrations
{
    public partial class RemoveStreetFromCandidateProfile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Street",
                table: "CandidateProfiles");

            migrationBuilder.DropColumn(
                name: "ZipCode",
                table: "CandidateProfiles");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Street",
                table: "CandidateProfiles",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ZipCode",
                table: "CandidateProfiles",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
