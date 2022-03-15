import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ICompanyAddress } from 'src/app/shared/models/company/companyAddress';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class CompanyProfileComponent implements OnInit {


  companyProfileId: number;
  companyAddresses: ICompanyAddress[];
  addressForm: FormGroup;
  activeEditeMood: boolean;


  constructor(
    private companyServe: CompanyService,
    private fm: FormBuilder, private messageService: MessageService,
    private confirmationService: ConfirmationService) {
    // this.companyProfileId = +this.router.snapshot.paramMap.get('id');
    this.createAddressForm();
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
        //mach all text
        this.companyProfileId = res.id;
        this.companyAddresses = res.companyAddresses;
        console.log(res);
      }
    });
  }

  getAllCompanyAddresses() {
    this.companyServe.GetAllCompanyAddresses(this.companyProfileId).subscribe((res: any) => {
      this.companyAddresses = res.companyAddresses;
      console.log(this.companyAddresses);

    })
  }
  createAddressForm() {

    this.addressForm = this.fm.group({
      country: [null, [Validators.required]],
      city: [null, [Validators.required]],
      street: [null, [Validators.required]],
      zipCode: [null, [Validators.required]],
      companyProfileId: [this.companyProfileId],
      id: [0],
    });


  }


  submitForm() {
    this.addressForm.controls.companyProfileId.setValue(this.companyProfileId);
    this.companyServe.CreateCompanyProfileAddress(this.addressForm.value).subscribe((res: ICompanyAddress) => {
      if (res) {
        this.alertMessage("new Address added Susscess", "success");
        this.companyAddresses.push(res)
      }
    }, err => {
      console.log(err);
      this.alertMessage("something wrong", "error");
    })
  }

  initialEditAddress(addressObj: any) {
    console.log(addressObj);
    this.addressForm.patchValue(addressObj);
    this.activeEditeMood = true;
  }

  updateAddress() {
    debugger
    console.log(this.addressForm.value);
    this.addressForm.controls.companyProfileId.setValue(this.companyProfileId);

    this.companyServe.EditCompanyProfileAddress(this.addressForm.value).subscribe((res: ICompanyAddress) => {
      if (res) {
        debugger
        this.alertMessage("Updated Address Susscess", "success");
        console.log(res);
        //remove old item
        this.companyAddresses = this.companyAddresses.filter((i) => i.id !== res.id);
        console.log(this.companyAddresses)
        //add new item
        this.companyAddresses.push(res);
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
    this.addressForm.reset();
    this.activeEditeMood = false;
  }

  // confirmRemove() {
  //   this.confirmServ.confirm({
      
  //     message: 'Are you sure from remove this Address ?',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       //confirm action
  //       this.removeCompanyProfileAddress();
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
            this.removeCompanyProfileAddress(id);
        }
    });
}
  removeCompanyProfileAddress(id:any) {
    debugger
    console.log(id);
    
    this.companyServe.DeleteCompanyProfileAddress(id).subscribe((res: any) => {
      this.alertMessage(res.message, "success");
      this.companyAddresses = this.companyAddresses.filter((i) => i.id !== id);

    }, err => {
      this.alertMessage(err.message, "error");
    })
  }
}
