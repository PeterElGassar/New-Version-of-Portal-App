using Api.Models.Company;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Persistence.Repositories.IRepository
{
    public interface ICompanyRepository:IRepository<CompanyProfile>
    {
        void Update(CompanyProfile companyProfile);
    }
}
