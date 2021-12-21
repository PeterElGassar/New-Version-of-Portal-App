import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  companyLogoFile:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  // OnSelectedImage(event){

  //   console.log(event.currentFiles);

  // }


  selectedFile: File = null;
  img_path: string='assets/images/avatar-img.jpg';

  OnSelectedImage(event) {
    debugger
    console.log(event.currentFiles);
    if (event.currentFiles[0]) {

      debugger;
      this.selectedFile = <File>event.currentFiles[0];
      let reader = new FileReader();
      reader.readAsDataURL(event.currentFiles[0]);

      
      reader.onload = (e: any) => {
        debugger;
        this.img_path = e.target.result;
      };


    }
  }

  
}
