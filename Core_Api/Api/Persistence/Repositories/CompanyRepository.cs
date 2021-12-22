using Api.Models;
using Api.Models.Company;
using Api.Persistence.Repositories.IRepository;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Persistence.Repositories
{
    public class CompanyRepository : MainRepository<CompanyProfile>, ICompanyRepository
    {
        private readonly Context _context;
        //private readonly IMapper _mapper;

        public CompanyRepository(Context context) :base(context)
        {
            _context = context;
            //_mapper = mapper;
        }


        public void Update(CompanyProfile companyProfile)
        {
            var companyProfileInDB = _context
                .CompanyProfiles.FirstOrDefault(cp => cp.AppUserId == companyProfile.AppUserId);

            if (companyProfileInDB != null)
            {
                companyProfileInDB.CompanyName = companyProfile.CompanyName;
                companyProfileInDB.ImgLogoPath = companyProfile.ImgLogoPath;
                companyProfileInDB.FoundedDate = companyProfile.FoundedDate;
                companyProfileInDB.CompanySize = companyProfile.CompanySize;
                companyProfileInDB.LinkedIn = companyProfile.LinkedIn;
                companyProfileInDB.Feacbook = companyProfile.Feacbook;
                companyProfileInDB.Website = companyProfile.Website;

                 //var newCompanyProfile = _mapper.Map<CompanyProfile, CompanyProfile>(companyProfileInDB);
                _context.SaveChanges();
            }
        }
    }
}
