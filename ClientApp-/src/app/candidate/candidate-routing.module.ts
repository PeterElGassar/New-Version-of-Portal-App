import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './candidate.component';
import { CompanyInfoComponent } from '../company/company-info/company-info.component';




const routes: Routes =[

  {
    path: '',
    component: CandidateComponent,
    children: [
      {
        path: 'profile',
        component: CompanyInfoComponent,
      },
    ],
  }
]




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CandidateRoutingModule { }
