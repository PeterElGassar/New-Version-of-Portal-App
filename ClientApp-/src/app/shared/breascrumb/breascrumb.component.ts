import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breascrumb',
  templateUrl: './breascrumb.component.html',
  styleUrls: ['./breascrumb.component.css']
})
export class BreascrumbComponent implements OnInit {


  @Input() title
  
  constructor() { }

  ngOnInit(): void {
  }
}
