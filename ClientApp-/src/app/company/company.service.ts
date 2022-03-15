import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl = environment.appUrl;
  constructor(private http: HttpClient) {


  }

  createCompanyProfile(value: any, token: string) {

    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${token}`);

    return this.http.post(this.baseUrl + "Company/CreateCompanyProfile", value, { headers })
  }

  updatedCompanyProfile(value: any, token: string) {

    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${token}`);
    return this.http.post(this.baseUrl + "Company/UpdateCompanyProfile", value, { headers })
  }


  getCompanyProfile() {
    let token = localStorage.getItem("token");
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${token}`);

    return this.http.get(this.baseUrl + "Company/GetCompanyProfile", { headers })
  }


  getIndustries(){
    return this.http.get(this.baseUrl + "industry");
  }

// Company Address//////////////////////////
// Company Address//////////////////////////
// Company Address//////////////////////////
GetAllCompanyAddresses(companyProfileId:number ){

  let headers = new HttpHeaders();
  headers = headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);


 return  this.http.get(this.baseUrl+`Company/GetAllAddresses?companyProfileId=${companyProfileId}`,{headers});
}

CreateCompanyProfileAddress(value :any){
  let headers = new HttpHeaders();
  headers = headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);

  return this.http.post(this.baseUrl+"Company/CreateCompanyAddress",value ,{headers})
}

EditCompanyProfileAddress(value :any){
  let headers = new HttpHeaders();
  headers = headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
  return this.http.put(this.baseUrl+"Company/UpdateCompanyAddress",value ,{headers})
}

DeleteCompanyProfileAddress(id :any){
  let headers = new HttpHeaders();
  headers = headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
  return this.http.delete(this.baseUrl+`Company/DeleteCompanyAddress?Id=${id}`,{headers})
}


// Company Phone Numbers//////////////////////////
// Company Phone Numbers//////////////////////////
// Company Phone Numbers//////////////////////////
GetAllCompanyphoneNumbers(companyProfileId:number ){
  let headers = new HttpHeaders();
  headers = headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
  debugger;
 return  this.http.get(this.baseUrl+`Company/GetAllPhoneNumbers?companyProfileId=${companyProfileId}`,{headers});
}

CreateCompanyProfileNumber(value :any){
  let headers = new HttpHeaders();
  headers = headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
  return this.http.post(this.baseUrl+"Company/CreatePhoneCompanyNumber",value ,{headers})
}

EditCompanyProfileNumber(value :any){
  let headers = new HttpHeaders();
  headers = headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
  return this.http.put(this.baseUrl+"Company/UpdateCompanyPhoneNumber",value ,{headers})
}

DeleteCompanyProfileNumber(id :any){
  let headers = new HttpHeaders();
  headers = headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
  return this.http.delete(this.baseUrl+`Company/DeleteCompanyNumber?id=${id}`,{headers})
}

UploadCompanyLogo(value:any){
  let token = localStorage.getItem("token")
  let headers = new HttpHeaders();
  headers = headers.set("Authorization", `Bearer ${token}`);

  return this.http.post(this.baseUrl + "company/SaveCompanyLogo", value, { headers })
}

}
