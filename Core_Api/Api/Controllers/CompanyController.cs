
using System.Threading.Tasks;
using Api.Extentions;
using Api.Models;
using Api.Models.Company;
using Api.Persistence.Dtos;
using Api.Persistence.Repositories.IRepository;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Api.Controllers
{
    [Authorize(AuthenticationSchemes = "Bearer")]
    public class CompanyController : BaseApiController
    {

        private readonly IUnitOfWork _unitOfWork;
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;
        public CompanyController(IUnitOfWork unitOfWork, UserManager<AppUser> userManager, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _userManager = userManager;
            _mapper =  mapper;
        }


        [HttpGet("getCompanyProfile")]
        public async Task<ActionResult<CompanyProfile>> getCompanyProfile()
        {
            var user = await _userManager.FindByEmailWithProfileCompany(HttpContext.User);
            var compantProfile = await _unitOfWork.Company.GetFirstOrDefaultAsync(cp => cp.AppUserId == user.Id, "CompanyPhonNumbers");
            //var compantProfile = await _context.CompanyProfiles.Include(cp => cp.CompanyPhonNumbers).FirstOrDefaultAsync(cp => cp.AppUserId == user.Id);

            //return _mapper.Map<CompanyProfile, CompanyProfileDto>(compantProfile);
            return  compantProfile;
        }





        [HttpPost("CreateCompanyProfile")]
        public ActionResult<CompanyProfileDto> CreateCompanyProfile(CompanyProfileDto companyProfileDto)
        {

            if (companyProfileDto == null)
                  return StatusCode(StatusCodes.Status404NotFound, new { Status = 404, Message = "Please Enter Full Data" });

              _unitOfWork.Company.Add(_mapper.Map<CompanyProfileDto,CompanyProfile>(companyProfileDto));
              _unitOfWork.Complete();

            return  companyProfileDto;
        }
        
        [HttpPost("UpdateCompanyProfile")]
        public ActionResult<CompanyProfileDto> UpdateCompanyProfile(CompanyProfileDto companyProfileDto)
        {

            if (companyProfileDto == null)
                  return StatusCode(StatusCodes.Status404NotFound, new { Status = 404, Message = "Please Enter Full Data" });

              _unitOfWork.Company.Update(_mapper.Map<CompanyProfileDto,CompanyProfile>(companyProfileDto));
              _unitOfWork.Complete();

            return  companyProfileDto;
        }  
        
        [HttpDelete("DeleteCompanyProfile")]
        public ActionResult DeleteCompanyProfile(int id)
        {

            
              _unitOfWork.Company.Remove(id);
              _unitOfWork.Complete();

            return Ok(new { message="Deleted Success"}) ;
        }







        [HttpPost,DisableRequestSizeLimit]
        [Route("SaveCompanyLogo")]        
        public async Task<IActionResult> SaveCompanyLogo()
        {
            try
            {
                var user = await _userManager.FindByEmailWithProfileCompany(HttpContext.User);
                var compantProfile = await _unitOfWork.Company.GetFirstOrDefaultAsync(cp => cp.AppUserId == user.Id);
                //extract the first file whitch attached in the request body

                var result = _unitOfWork.Company.SaveCompanyLogo(Request.Form.Files[0], compantProfile.CompanyName);

                if (result.Status)
                {
                    //AsignToProfileCompany(dbPath);
                    compantProfile.ImgLogoPath = result.Path;
                    _unitOfWork.Company.Update(compantProfile);
                    _unitOfWork.Complete();

                };

                return Ok(new { message = result.Path });
            }
            catch (System.Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex}");
            }

        }




        //public IActionResult AsignToProfileCompany(string imgPath )
        //{

        //    var user = await _userManager.FindByEmailWithProfileCompany(HttpContext.User.Identity.);
        //    var compantProfile = await _unitOfWork.Company.GetFirstOrDefaultAsync(cp => cp.AppUserId == user.Id);

        //    compantProfile.ImgLogoPath = imgPath;
        //    _unitOfWork.Company.Update(compantProfile);

        //    _unitOfWork.Complete();
        //    return Ok();
        //}

    }
}
