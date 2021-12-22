using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models.Company
{
    public class CompanyProfile
    {


        public CompanyProfile()
        {
            CompanyIndustries = new Collection<CompanyIndustry>();
            CompanyPhonNumbers = new Collection<CompanyPhonNumber>();
        }

        public int Id { get; set; }

        public string CompanyName { get; set; }

        public string ImgLogoPath { get; set; }

   
        public DateTime FoundedDate { get; set; }

        public int CompanySize { get; set; }

        public string LinkedIn { get; set; }
        public string Feacbook { get; set; }
        public string Website { get; set; }



        public virtual ICollection<CompanyAddress> CompanyProfiles { get; set; }
        public virtual ICollection<CompanyIndustry> CompanyIndustries { get; set; }
        public  ICollection<CompanyPhonNumber> CompanyPhonNumbers { get; set; }


        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }

    }
}
