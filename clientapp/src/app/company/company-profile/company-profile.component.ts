import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  constructor() { }

  
  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Company Information',
          routerLink :"/company/info"},

          {label: 'Company Profile',
          routerLink :"/company/profile"},

          {label: 'Company Addresses',
          routerLink :"/company/Address"},
       
      ];
  }
}
