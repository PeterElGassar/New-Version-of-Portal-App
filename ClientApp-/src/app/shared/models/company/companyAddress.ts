import { ICompanyProfile } from "./companyProfile";

export interface ICompanyAddress {
    id:number;
    country:string;
    city:string;
    street:string;
    zipCode:string;

    companyProfileId:number;
    companyProfile:ICompanyProfile;

}