import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ICompanyPhoneNumber } from 'src/app/shared/models/company/companyPhonNumber';

import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-numbers',
  templateUrl: './company-numbers.component.html',
  styleUrls: ['./company-numbers.component.css'],
  providers: [MessageService, ConfirmationService]
})

export class CompanyNumbersComponent implements OnInit {

  companyProfileId: number;
  companyNumbers: ICompanyPhoneNumber[];
  PhoneNumberForm: FormGroup;
  activeEditeMood: boolean;


  constructor(
    private companyServe: CompanyService,
    private fm: FormBuilder, private messageService: MessageService,
    private confirmationService: ConfirmationService) {
    // this.companyProfileId = +this.router.snapshot.paramMap.get('id');
    this.createPhoneNumberForm();
    this.getCompanyProfileId();
  }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Company Information',
        routerLink: "/company/info"
      },

      {
        label: 'Company Addresses',
        routerLink: "/company/profile"
      },
      {
        label: 'Contact Numbers',
        routerLink: "/company/contact-numbers"
      },

    ];
  }

  getCompanyProfileId() {
    this.companyServe.getCompanyProfile().subscribe((res: any) => {
      if (res) {
        debugger
        //mach all text
        this.companyProfileId = res.id;
        this.companyNumbers = res.companyPhonNumbers;
        console.log(res);
      }
    });
  }

  createPhoneNumberForm() {

    this.PhoneNumberForm = this.fm.group({
      id: [0],
      phoneNumber: [null, [Validators.required,Validators.minLength(11)]],
      companyProfileId: [this.companyProfileId]
    });
  }


  submitForm() {
    this.PhoneNumberForm.controls.companyProfileId.setValue(this.companyProfileId);
    this.companyServe.CreateCompanyProfileNumber(this.PhoneNumberForm.value).subscribe((res: ICompanyPhoneNumber) => {
      if (res) {
        this.alertMessage("new PhoneNumber added Susscess", "success");
        this.companyNumbers.push(res)
      }
    }, err => {
      console.log(err);
      this.alertMessage("something wrong", "error");
    })
  }

  initialEditPhoneNumber(PhoneNumberObj: any) {
    console.log(PhoneNumberObj);
    this.PhoneNumberForm.patchValue(PhoneNumberObj);
    this.activeEditeMood = true;
  }

  updatePhoneNumber() {
    debugger
    console.log(this.PhoneNumberForm.value);
    this.PhoneNumberForm.controls.companyProfileId.setValue(this.companyProfileId);

    this.companyServe.EditCompanyProfileNumber(this.PhoneNumberForm.value).subscribe((res: ICompanyPhoneNumber) => {
      if (res) {
        debugger
        this.alertMessage("Updated PhoneNumber Susscess", "success");
        console.log(res);
        //remove old item
        this.companyNumbers = this.companyNumbers.filter((i) => i.id !== res.id);
        console.log(this.companyNumbers)
        //add new item
        this.companyNumbers.push(res);
        this.cancelUpdateMood();

      }
    }, err => {
      this.alertMessage("something wrong", "error");

    })
  }



  alertMessage(message: string, alertType: string) {
    this.messageService.add({
      key: 'ImageSaveSuccess',
      severity: alertType,
      summary: 'Resources One',
      detail: message,
    });
  }

  cancelUpdateMood() {
    this.PhoneNumberForm.reset();
    this.activeEditeMood = false;
  }

  // confirmRemove() {
  //   this.confirmServ.confirm({
      
  //     message: 'Are you sure from remove this PhoneNumber ?',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       //confirm action
  //       this.removeCompanyProfilePhoneNumber();
  //     },
  //     reject: () => {
  //       //reject action
  //     }
  //   });
  // }


  confirmRemove(id:any) {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
            //Actual logic to perform a confirmation
            this.removeCompanyProfilePhoneNumber(id);
        }
    });
  }
  
  removeCompanyProfilePhoneNumber(id:any) {
    debugger
    console.log(id);
    
    this.companyServe.DeleteCompanyProfileNumber(id).subscribe((res: any) => {
      this.alertMessage(res.message, "success");
      this.companyNumbers = this.companyNumbers.filter((i) => i.id !== id);
    }, err => {
      this.alertMessage(err.message, "error");
    })
  }

}
