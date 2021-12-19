using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models.BasicModels;
using Api.Persistence.Repositories.IRepository;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    public class IndustryController : BaseApiController
    {

        private readonly IUnitOfWork _unitOfWork;

        public IndustryController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            
        }


        //[HttpGet]
        //public async Task<ActionResult<List<ProductDto>>> GetProducts([FromQuery] ProductSpecParams productParams)
        //{
        //    var spec = new ProductsWithTypesAndBrands(productParams);

        //    var countSpec = new ProductWithFlitersForCountSpecifications(productParams);

        //    var totalItems = await _productRepo.CountAsync(countSpec);

        //    var products = await _productRepo.ListAsync(spec);
        //    var data = _mapper.Map<List<Product>, List<ProductDto>>(products);

        //    return Ok(new Pagination<ProductDto>(productParams.PageIndex, productParams.PageSize, totalItems, data));
        //}



        [HttpGet]
        public   ActionResult<List<Industry>> GetIndustries()
        {
            var industries = _unitOfWork.Industry.GetAll();

            return Ok(industries);
        }
    }
}
