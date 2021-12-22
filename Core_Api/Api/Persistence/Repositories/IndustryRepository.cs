    using Api.Models;
using Api.Models.BasicModels;
using Api.Persistence.Repositories.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Persistence.Repositories
{
    public class IndustryRepository : MainRepository<Industry>, IIndustryRepository
    {
        private readonly Context _context;

        public IndustryRepository(Context context):base(context)
        {
            _context = context;

        }
        public void Update(Industry industry)
        {
            var industruFromDb = _context.Industries.FirstOrDefault(i=> i.Id == industry.Id);
            if (industruFromDb != null)
            {
                industruFromDb.Name = industry.Name;
                _context.SaveChanges();
            }
        }
    }
}
