import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyInfoComponent } from './company-info/company-info.component';

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

  {
    path: '',
    component: CompanyComponent,
    children: [
      {
        path: 'info',
        component: CompanyInfoComponent,
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
