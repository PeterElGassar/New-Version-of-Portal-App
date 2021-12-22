import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {

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
