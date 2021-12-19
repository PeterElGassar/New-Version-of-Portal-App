import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreascrumbComponent } from './breascrumb/breascrumb.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MenuModule} from 'primeng/menu';
import { TextInputComponent } from './text-input/text-input.component';

import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    BreascrumbComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MenuModule,
    ProgressSpinnerModule,
    
    
  ],exports:[
    BreascrumbComponent,
    TextInputComponent
  ]
})
export class SharedModule { }
