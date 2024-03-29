﻿using System;
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



        public string ProfileImgPath { get; set; }

        public string CvPath { get; set; }

        public bool IsDeleted { get; set; }


        public DateTime DateOfBirth { get; set; }

        public string Gender { get; set; }

        public string Nationalty { get; set; }


        //Relative object 
        public virtual ICollection<ProfileCandidatePhonNumber> ProfileCandidatePhonNumbers { get; set; }


        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }

        public string EducationLevelId { get; set; }
        public EducationLevel EducationLevel { get; set; }
    }
}
