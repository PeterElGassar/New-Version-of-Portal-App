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
                .CompanyProfiles.FirstOrDefault(cp => cp.Id == companyProfile.Id);

            if (companyProfileInDB != null)
            {
                companyProfileInDB.CompanyName = companyProfile.CompanyName;
                companyProfileInDB.ImgLogoPath = companyProfile.ImgLogoPath;
                companyProfileInDB.FoundedDate = companyProfile.FoundedDate;
                companyProfileInDB.CompanySize = companyProfile.CompanySize;

                 //var newCompanyProfile = _mapper.Map<CompanyProfile, CompanyProfile>(companyProfileInDB);
                _context.SaveChanges();
            }
        }
    }
}


//public int Id { get; set; }

//public string CompanyName { get; set; }

//public string ImgLogoPath { get; set; }


//public DateTime FoundedDate { get; set; }

//public int CompanySize { get; set; }

//public string LinkedIn { get; set; }
//public string Feacbook { get; set; }
//public string Website { get; set; }