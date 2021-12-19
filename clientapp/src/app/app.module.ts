import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorInterceptor } from './interceptors/error.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoderInterceptor } from './interceptors/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    
  ],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},
    {provide: HTTP_INTERCEPTORS,useClass:LoderInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
