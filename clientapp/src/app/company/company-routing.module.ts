import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';

const routes : Routes=[

  {
    path: '',
    component: CompanyComponent,
    children: [
      {
        path: 'profile',
        component: CompanyProfileComponent,
      },
    ],
  },


 
]

@NgModule({
  declarations: [
  
  ],

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],


})
export class CompanyRoutingModule { }
