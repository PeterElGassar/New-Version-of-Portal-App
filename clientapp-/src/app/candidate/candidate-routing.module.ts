import { CandidateInfoComponent } from './candidate-info/candidate-info.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './candidate.component';




const routes: Routes =[

  {
    path: '',
    component: CandidateComponent,
    children: [
      {
        path: 'profile',
        component: CandidateInfoComponent,
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
