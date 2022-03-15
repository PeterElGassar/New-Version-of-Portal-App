import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-2';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.workTypes = [
      {name: 'Full Time', code: 'NY'},
      {name: 'Remotly', code: 'RM'},
      {name: 'Part Time', code: 'LDN'},
  ];

    this.jobs = [
      {name: 'Full Time', code: 'NY'},
      {name: 'Remotly', code: 'RM'},
      {name: 'Part Time', code: 'LDN'},
      {name: 'Full Time1', code: 'NY'},
      {name: 'Remotly2', code: 'RM'},
      {name: 'Part Time3', code: 'LDN'},
  ];



  }

  workTypes:any[];

  jobs:any[];
  selectedWorkType:any;
  itemsNumbersPerPage:number=6;
  pageNumber:number=1;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 2,
        },
        740: {
            items: 3,
        },
        940: {
            items: 4,
        },
    },
    nav: true,
  };

}
