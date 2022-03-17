// import { ITest } from './../../shared/models/test';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { AccountService } from 'src/app/account/account.service';
import { Observable } from 'rxjs';
import { CompanyService } from '../company.service';
import { DatePipe } from '@angular/common';
import { MultiSelectIndustries } from 'src/app/shared/models/MultiSelectIndustries';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css'],
  providers: [DatePipe, MessageService]
})

export class CompanyInfoComponent implements OnInit {
  
  items: MenuItem[];
  industries: MultiSelectIndustries[]=[];
  selectedCompanySize: string;
  CompanySizes: string[] = ["10-50", "50-100", "100-200", "300-500", "500-1000", "1000-2000", "2500+"];
  userId: string = '';
  CpmpanyInfoForm: FormGroup;
  companyProfileId: number = 0;
  token: any;
  selectedIndustries: MultiSelectIndustries[];


  constructor(private fm: FormBuilder, private accountSerrvice: AccountService
    , private companyServe: CompanyService, private messageService: MessageService) {

    this.getUserId();
    this.token = localStorage.getItem("token");
  }

  currentUserId$: Observable<string>;

  ngOnInit() {
    this.getIndusries();
    this.getCompanyProfile();


    this.items = [
      {
        label: 'Company Information',
        routerLink: "/company/info"
      },

      {
        label: 'Address',
        routerLink: "/company/profile"
      },

      {
        label: 'Contact Numbers',
        routerLink: "/company/contact-numbers"
      },

    ];

    this.createCompanyinfoForm();
  }

  getUserId() {
    this.accountSerrvice.currentUserId$.subscribe((userId) => {
      if (userId) {
        this.userId = userId;
      }
    }, error => {
      console.log(error);
    })
  }

  createCompanyinfoForm() {
    this.CpmpanyInfoForm = this.fm.group({
      companyName: [null, [Validators.maxLength(100), Validators.required]],
      FoundedDate: [null, [Validators.required]],
      companyDescription: [null, [Validators.required]],
      companySize: [null, [Validators.required]],
      linkedIn: [null, [Validators.required]],
      feacbook: [null, [Validators.required]],
      companyIndustries: [null, [Validators.required]],
      website: [null],
      appUserId: [null],
      id: [0]
    })
  }

  submitForm() {
    this.CpmpanyInfoForm.controls.appUserId.setValue(this.userId);
    this.companyServe.createCompanyProfile(this.CpmpanyInfoForm.value, this.token).subscribe((res) => {
      if (res) {
        debugger;
        this.successMessage("Profile Uplodaed Susscess", "success");
        this.CpmpanyInfoForm.controls.id.setValue(10000);
      }
    }, error => {
      debugger;
      this.successMessage("Some thing Wrong", "error");
    });
  }

  submitUpdateForm() {

    this.CpmpanyInfoForm.controls.appUserId.setValue(this.userId);
    this.CpmpanyInfoForm.controls.id.setValue(this.companyProfileId);
    // this.CpmpanyInfoForm.controls.companyIndustries.setValue(this.selectedIndustries);
console.log(this.CpmpanyInfoForm.value);

    console.log(this.CpmpanyInfoForm.value);
    this.companyServe.updatedCompanyProfile(this.CpmpanyInfoForm.value, this.token).subscribe((res) => {
      if (res) {
        this.successMessage("Profile Info Updated Susscess", "success");
      }
    }, error => {
      this.successMessage("Some thing Wrong", "error");
      console.log(error);
    });
  }


  getCompanyProfile() {
    this.companyServe.getCompanyProfile().subscribe((res: any) => {
      if (res) {
        //mach all text
        this.CpmpanyInfoForm.patchValue(res);
        //this.selectedIndustries = res.companyIndustries;
        this.CpmpanyInfoForm.controls.FoundedDate.setValue(new Date(res.foundedDate));

        this.industries.forEach((elm :MultiSelectIndustries) =>{
          debugger;
          console.log(res.companyIndustries[0].companyProfileId);
          elm.companyProfileId = res.companyIndustries[0].companyProfileId;
        });

        
        this.CpmpanyInfoForm.controls.companyIndustries.setValue(res.companyIndustries);
        this.companyProfileId = res.id;
      }
    });
  }

  getIndusries() {
    this.companyServe.getIndustries().subscribe((res:any) => {
      if (res) {
        this.industries = res;
        console.log(this.industries);
      }
    })
  }

  successMessage(message: string, alertType: string) {
    this.messageService.add({
      key: 'ImageSaveSuccess',
      severity: alertType,
      summary: 'Resources One',
      detail: message,
    });
  }

}
