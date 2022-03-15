import { SharedModule } from './../shared/shared.module';
import { UserLayoutComponent } from './../user-layout/user-layout.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { UserLayoutModule } from '../user-layout/user-layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccountComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule,
    UserLayoutModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
