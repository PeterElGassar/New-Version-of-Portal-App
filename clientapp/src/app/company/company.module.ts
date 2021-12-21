import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { UserLayoutModule } from '../user-layout/user-layout.module';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyInfoComponent } from './company-info/company-info.component';

import {StepsModule} from 'primeng/steps';

@NgModule({
  declarations: [
    CompanyComponent,
    CompanyProfileComponent,
    CompanyInfoComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    UserLayoutModule,
    SharedModule,
    StepsModule,
    
  ]
})
export class CompanyModule { }
