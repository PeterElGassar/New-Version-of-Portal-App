import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CompanyService } from 'src/app/company/company.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [MessageService]

})
export class SidebarComponent implements OnInit {


  companyLogoFile: any[] = [];
  baseUrl = environment.appUrl;
  serverPathUrl = environment.serverPathUrl;
  constructor(private http: HttpClient, private messageService: MessageService, private companyServ: CompanyService) { }


  ngOnInit(): void {
    this.getCompanyProfileLogo();
  }

  selectedFile: File = null;
  img_path: string = null;

  OnSelectedImage(event) {
    debugger
    console.log(event.currentFiles);
    if (event.currentFiles[0]) {
      this.selectedFile = <File>event.currentFiles[0];

      //invok showImageFunction
      this.showImage(event);
      let formData = new FormData();
      formData.append("file", this.selectedFile, this.selectedFile.name);
      //call Server

      this.uploadImageToServer(formData);


    }
  }

  getCompanyProfileLogo() {
    this.companyServ.getCompanyProfile().subscribe((res: any) => {
      if (res) {
        debugger
        //mach all text
        console.log(res);
        this.img_path = this.serverPathUrl + res.imgLogoPath;

      }else{
        this.img_path = 'assets/images/company-logo-placeholder-2.png';
      }
    });
  }

  showImage(event) {
    debugger;
    let reader = new FileReader();
    reader.readAsDataURL(event.currentFiles[0]);


    reader.onload = (e: any) => {
      debugger;
      this.img_path = e.target.result;
    };
  }

  uploadImageToServer(formData: any) {


    this.companyServ.UploadCompanyLogo(formData).subscribe((res: any) => {

      debugger;
      if (res) {
        this.successMessage("Image Uploded Success", "success");
      }
    }, error => {
      console.log(error);
      this.successMessage("Image does't Uploded", "error");

    });
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
