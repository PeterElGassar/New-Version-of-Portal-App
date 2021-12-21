import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreascrumbComponent } from './breascrumb/breascrumb.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MenuModule} from 'primeng/menu';
import { TextInputComponent } from './text-input/text-input.component';

import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    BreascrumbComponent,
    TextInputComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MenuModule,
    ProgressSpinnerModule,
    FileUploadModule,
    HttpClientModule
  ],exports:[
    BreascrumbComponent,
    TextInputComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
