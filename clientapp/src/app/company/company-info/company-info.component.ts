import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IIndustry } from 'src/app/shared/models/idustry';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {

  constructor() { }
  items: MenuItem[];
  industries:IIndustry[];

  selectedCompanySize:string;

  CompanySizes: string[]=["10-50","50-100","100-200","300-500","500-100","1000-2000","2500+"];

  ngOnInit() {
      this.items = [
          {label: 'Company Information',
          routerLink :"/company/info"},

          {label: 'Company Profile',
          routerLink :"/company/profile"},

          {label: 'Company Addresses',
          routerLink :"/company/Address"},
       
      ];

      this.industries=[
        {Id:50,Name:"Indeustry-1"},
        {Id:40,Name:"Indeustry-2"},
        {Id:30,Name:"Indeustry-3"},
        {Id:20,Name:"Indeustry-4"},
        {Id:60,Name:"Indeustry-5"},
        {Id:70,Name:"Indeustry-6"},
      ];
  }

  
}
