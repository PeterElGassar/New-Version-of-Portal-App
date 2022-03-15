import { ICompanyAddress } from "./companyAddress";
import { ICompanyIndustry } from "./companyIndustry";
import { ICompanyPhoneNumber } from "./companyPhonNumber";

export interface ICompanyProfile{

        Id:number;
        CompanyName:string;
        ImgLogoPath:string;
        FoundedDate:Date;
        CreateAt:Date;
        CompanySize:string;
        LinkedIn:string;
        Feacbook:string;
        Website:string;
        AppUserId:string;
    
        CompanyDescription:string,

        CompanyAddresses:ICompanyAddress[];
        CompanyIndustries:ICompanyIndustry[];
        CompanyPhonNumbers:ICompanyPhoneNumber[];

    // public int Id { get; set; }
    // public string CompanyName { get; set; }
    // public string ImgLogoPath { get; set; }
    // public DateTime FoundedDate { get; set; }

    // public int CompanySize { get; set; }
    // public string LinkedIn { get; set; }
    // public string Feacbook { get; set; }
    // public string Website { get; set; }
    // public string AppUserId { get; set; }
    // public virtual ICollection<CompanyAddress> CompanyProfiles { get; set; }
    // public virtual ICollection<CompanyIndustry> CompanyIndustries { get; set; }
    // public  ICollection<CompanyPhonNumber> CompanyPhonNumbers { get; set; }
}