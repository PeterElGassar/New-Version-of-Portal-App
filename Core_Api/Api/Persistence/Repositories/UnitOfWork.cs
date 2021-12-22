using Api.Models;
using Api.Persistence.Repositories.IRepository;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Persistence.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {

        private readonly Context _context;


        //private readonly SignInManager<AppUser> _signInManager;
        //private readonly UserManager<AppUser> _userManager;

        public UnitOfWork(Context context)
        {
            _context = context;


            AppUser = new AppUserRepository(_context);

            Industry = new IndustryRepository(_context);
            Company = new CompanyRepository(_context);
        }

        public IAppUserRepository AppUser { get; private set; }
        public IIndustryRepository Industry { get; private set; }
        public ICompanyRepository Company { get; private set; }




        //Save Change in Glopal layer for every Repo
        public void Complete()
        {
            _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
