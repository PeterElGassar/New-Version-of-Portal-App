using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models.Candidate
{
    public class CandidateProfile
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string MiddleName { get; set; }

        public string LastName { get; set; }

        public string Country { get; set; }

        public string City { get; set; }


        public string Street { get; set; }

        public string ZipCode { get; set; }

        public string EducationLevel { get; set; }

        public string ProfileImgPath { get; set; }

        public string CvPath { get; set; }

        public bool IsDeleted { get; set; }


        public virtual ICollection<ProfileCandidatePhonNumber> PhonNumbers { get; set; }

        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }


    }
}
