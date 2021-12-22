﻿using Api.Models.Candidate;
using Api.Models.Company;
using Api.Persistence.Dtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Helpers
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            CreateMap<CandidateProfile, CandidatProfileDto>();
            CreateMap<CompanyProfile, CompanyProfile>();
            CreateMap<CompanyProfile, CompanyProfileDto>();
        }
    }
}
