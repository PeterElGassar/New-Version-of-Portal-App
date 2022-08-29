import { DatePipe } from '@angular/common';
import { MultiSelectIndustries } from 'src/app/shared/models/MultiSelectIndustries';
import { MenuItem, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
import { AccountService } from 'src/app/account/account.service';
import { EducationLevel } from 'src/app/shared/models/EducationLevel';

@Component({
  selector: 'app-candidate-info',
  templateUrl: './candidate-info.component.html',
  styleUrls: ['./candidate-info.component.css'],
  providers: [DatePipe, MessageService]
})
export class CandidateInfoComponent implements OnInit {

  items: MenuItem[];
  EducationLevels: EducationLevel[] = [];

  candidateSizes: string[] = ["10-50", "50-100", "100-200", "300-500", "500-1000", "1000-2000", "2500+"];
  userId: string = '';
  CandidateProfileForm: FormGroup;
  candidateProfileId: number = 0;
  token: any;
  selectedEducationLevel:EducationLevel;


  constructor(private fm: FormBuilder, private accountSerrvice: AccountService
    , private companyServe: CandidateService, private messageService: MessageService) {

    this.getUserId();
    this.token = localStorage.getItem("token");
  }

  currentUserId$: Observable<string>;

  ngOnInit() {
    this.getEducationLevels();
    this.getCandidateProfile();


    this.items = [
      {
        label: 'Candidate Information',
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

    this.createCandidateinfoForm();
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

  createCandidateinfoForm() {
    this.CandidateProfileForm = this.fm.group({
      firstName: [null, [Validators.maxLength(100), Validators.required]],
      middleName: [null, [Validators.maxLength(100), Validators.required]],
      lastName: [null, [Validators.maxLength(100), Validators.required]],
      country: [null, [Validators.maxLength(100), Validators.required]],
      city: [null, [Validators.maxLength(100), Validators.required]],

      educationLevelId: [null, [Validators.required]],
      profileImgPath: [null, [Validators.required]],
      cvPath: [null, [Validators.required]],
      nationalty: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      
      dateOfBirth: [null, [Validators.required]],
      appUserId: [null],
      id: [0]
    })
  }




  submitForm() {
    this.CandidateProfileForm.controls.appUserId.setValue(this.userId);
    this.companyServe.createCandidateProfile(this.CandidateProfileForm.value, this.token).subscribe((res) => {
      if (res) {
        debugger;
        this.successMessage("Profile Uplodaed Susscess", "success");
        this.CandidateProfileForm.controls.id.setValue(10000);
      }
    }, error => {
      debugger;
      this.successMessage("Some thing Wrong", "error");
    });
  }

  submitUpdateForm() {

    this.CandidateProfileForm.controls.appUserId.setValue(this.userId);
    this.CandidateProfileForm.controls.id.setValue(this.candidateProfileId);
    // this.CandidateProfileForm.controls.companyIndustries.setValue(this.selectedIndustries);
    console.log(this.CandidateProfileForm.value);

    console.log(this.CandidateProfileForm.value);
    this.companyServe.updatedCandidateProfile(this.CandidateProfileForm.value, this.token).subscribe((res) => {
      if (res) {
        this.successMessage("Profile Info Updated Susscess", "success");
      }
    }, error => {
      this.successMessage("Some thing Wrong", "error");
      console.log(error);
    });
  }


  getCandidateProfile() {
    this.companyServe.getCandidateProfile().subscribe((res: any) => {
      if (res) {
        //mach all text
        this.CandidateProfileForm.patchValue(res);
        this.CandidateProfileForm.controls.FoundedDate.setValue(new Date(res.foundedDate));

        // this.CandidateProfileForm.controls.companyIndustries.setValue(res.companyIndustries);
        this.candidateProfileId = res.id;
      }
    });
  }

  getEducationLevels() {
    this.companyServe.getEducationLevel().subscribe((res: any) => {
      if (res) {
        this.EducationLevels = res;
        console.log(this.EducationLevels);
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
