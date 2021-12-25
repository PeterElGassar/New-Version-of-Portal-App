import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers:  [MessageService]

})
export class SidebarComponent implements OnInit {


  companyLogoFile: any[] = [];
  constructor(private http: HttpClient,private messageService :MessageService) { }
  baseUrl = environment.appUrl;
  ngOnInit(): void {
  }

  // OnSelectedImage(event){

  //   console.log(event.currentFiles);

  // }


  selectedFile: File = null;
  img_path: string = 'assets/images/avatar-img.jpg';

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


      //Init Header
      let token = localStorage.getItem("token")
      let headers = new HttpHeaders();
      headers = headers.set("Authorization", `Bearer ${token}`);

      this.http.post(this.baseUrl + "company/SaveCompanyLogo", formData, { headers }).subscribe((res:any) => {
       
        debugger;
        if(res){

          this.successMessage("Image Uploded Success","success");
        }
      }, error => {
        debugger;
        console.log(error);
        this.successMessage("Image does't Uploded","error");

      });

    }
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

  uploadImageToServer() {

  }


  successMessage(message:string,alertType:string) {
    this.messageService.add({
          key: 'ImageSaveSuccess',
          severity: alertType,
          summary: 'Resources One',
          detail: message,
        });
  }

}
