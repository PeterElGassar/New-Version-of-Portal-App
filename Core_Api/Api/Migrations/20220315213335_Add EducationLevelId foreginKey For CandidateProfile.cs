using Microsoft.EntityFrameworkCore.Migrations;

namespace Api.Migrations
{
    public partial class AddEducationLevelIdforeginKeyForCandidateProfile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EducationLevel",
                table: "CandidateProfiles");

            migrationBuilder.AddColumn<string>(
                name: "EducationLevelId",
                table: "CandidateProfiles",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "EducationLevelId1",
                table: "CandidateProfiles",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CandidateProfiles_EducationLevelId1",
                table: "CandidateProfiles",
                column: "EducationLevelId1");

            migrationBuilder.AddForeignKey(
                name: "FK_CandidateProfiles_EducationLevels_EducationLevelId1",
                table: "CandidateProfiles",
                column: "EducationLevelId1",
                principalTable: "EducationLevels",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CandidateProfiles_EducationLevels_EducationLevelId1",
                table: "CandidateProfiles");

            migrationBuilder.DropIndex(
                name: "IX_CandidateProfiles_EducationLevelId1",
                table: "CandidateProfiles");

            migrationBuilder.DropColumn(
                name: "EducationLevelId",
                table: "CandidateProfiles");

            migrationBuilder.DropColumn(
                name: "EducationLevelId1",
                table: "CandidateProfiles");

            migrationBuilder.AddColumn<string>(
                name: "EducationLevel",
                table: "CandidateProfiles",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
