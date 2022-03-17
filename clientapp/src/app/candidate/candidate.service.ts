import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  baseUrl = environment.appUrl;
  constructor(private http: HttpClient) {


  }

  createCandidateProfile(value: any, token: string) {

    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${token}`);

    return this.http.post(this.baseUrl + "Candidate/CreateCandidateProfile", value, { headers })
  }

  updatedCandidateProfile(value: any, token: string) {

    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${token}`);
    return this.http.post(this.baseUrl + "Candidate/UpdateCandidateProfile", value, { headers })
  }

  getCandidateProfile() {
    let token = localStorage.getItem("token");
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${token}`);

    return this.http.get(this.baseUrl + "Candidate/getCandidateProfile", { headers })
  }




  // Candidate Phone Numbers//////////////////////////
  // Candidate Phone Numbers//////////////////////////
  // Candidate Phone Numbers//////////////////////////
  GetAllCandidatephoneNumbers(CandidateProfileId: number) {
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
    debugger;
    return this.http.get(this.baseUrl + `Candidate/GetAllPhoneNumbers?CandidateProfileId=${CandidateProfileId}`, { headers });
  }


  UploadCandidateLogo(value: any) {
    let token = localStorage.getItem("token")
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${token}`);

    return this.http.post(this.baseUrl + "Candidate/SaveCandidateLogo", value, { headers })
  }

  getEducationLevel(){
    return this.http.get(this.baseUrl + "EducationLevel");
  }
}
