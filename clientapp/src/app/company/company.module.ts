import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { UserLayoutModule } from '../user-layout/user-layout.module';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyRoutingModule } from './company-routing.module';



@NgModule({
  declarations: [
    CompanyComponent,
    CompanyProfileComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    UserLayoutModule
  ]
})
export class CompanyModule { }
