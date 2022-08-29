import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-jobs',
  templateUrl: './latest-jobs.component.html',
  styleUrls: ['./latest-jobs.component.css']
})
export class LatestJobsComponent implements OnInit {


  workTypes: any[];

  noPrePage: any[];

  @Input() filteredAllJobs: any[];

  selectedWorkType: any;
  selectedItemsPerPage: any;

  itemsNumbersPerPage: number = 3;
  pageNumber: number = 1;



  constructor() { }


  ngOnInit(): void {
    this.workTypes = [
      { name: 'Full Time', code: 'NY' },
      { name: 'Remotly', code: 'RM' },
      { name: 'Part Time', code: 'LDN' },
    ];

    this.noPrePage = [
      { name: '6 items', value: 6 },
      { name: '8 items', value: 8 },
      { name: '10 items', value: 10 },
      { name: '12 items', value: 12 },
    ];

    this.filteredAllJobs = [
      { name: 'Full Time', code: 'NY' },
      { name: 'Remotly', code: 'RM' },
      { name: 'Part Time', code: 'LDN' },
      { name: 'Full Time1', code: 'NY' },
      { name: 'Remotly2', code: 'RM' },
      { name: 'Part Time3', code: 'LDN' },
    ];



  }

  changeNumberOfItems() {
debugger;
    this.itemsNumbersPerPage = this.selectedItemsPerPage.value;
  }


}
