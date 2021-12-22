using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Extentions;
using Api.Models;
using Api.Models.Company;
using Api.Persistence.Dtos;
using Api.Persistence.Repositories.IRepository;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

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
        public async Task<ActionResult<CompanyProfileDto>> getCompanyProfile()
        {
            //var user = await _userManager.FindByEmailWithProfileCompany(HttpContext.User);
            var user = await _userManager.FindByEmailFromClaimsPrincipal(HttpContext.User);
            var compantProfile =  _unitOfWork.Company.GetFirstOrDefault(cp => cp.AppUserId ==user.Id);

            return _mapper.Map<CompanyProfile, CompanyProfileDto>(compantProfile);
        }


        //[HttpPost("CreateCompanyProfile")]       
        //public async Task<ActionResult<AppUserDto>> Register(RegisterDto RegisterDto)
        //{

            
        //    if (checkEmailExistsAsync(RegisterDto.Email).Result.Value)
        //    {
        //        return StatusCode(StatusCodes.Status400BadRequest, new { Status = 500, Message = "Email already exists!" });

        //    }

        //    var newUser = new AppUser
        //    {
        //        DisplayName = RegisterDto.DisplayName,
        //        Email = RegisterDto.Email,
        //        UserName = RegisterDto.Email,
        //        Role = RegisterDto.Role
        //    };

        //    var result = await _userManager.CreateAsync(newUser, RegisterDto.Password);
        //    var roleResult = await _userManager.AddToRoleAsync(newUser, RegisterDto.Role);

        //    if (!result.Succeeded || !roleResult.Succeeded)
        //        return StatusCode(StatusCodes.Status400BadRequest, result.Errors);



        //    var currentUser = await _userManager.FindByEmailAsync(RegisterDto.Email);

        //    return new AppUserDto()
        //    {
        //        Id = currentUser.Id,
        //        DisplayName = RegisterDto.DisplayName,
        //        Email = RegisterDto.Email,
        //        Token = _ITokenService.CreateToken(newUser),
        //        Role = RegisterDto.Role
        //    };
        //}

    }
}
