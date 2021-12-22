﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Persistence.Dtos
{
    public class CompanyProfileDto
    {
        public int Id { get; set; }

        public string CompanyName { get; set; }

        public string ImgLogoPath { get; set; }


        public DateTime FoundedDate { get; set; }

        public int CompanySize { get; set; }

        public string LinkedIn { get; set; }
        public string Feacbook { get; set; }
        public string Website { get; set; }

    }
}
