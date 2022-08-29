import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateComponent } from './candidate.component';
import { CandidateInfoComponent } from './candidate-info/candidate-info.component';
import { CandidateRoutingModule } from './candidate-routing.module';
import { UserLayoutModule } from '../user-layout/user-layout.module';
import { SharedModule } from './../shared/shared.module';
import { StepsModule } from 'primeng/steps';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputMaskModule } from 'primeng/inputmask';



@NgModule({
  declarations: [
    CandidateComponent,
    CandidateInfoComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    UserLayoutModule,
    SharedModule,
    StepsModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    MultiSelectModule,
    EditorModule,
    ToastModule,
    ToolbarModule,
    InputTextModule,
    ConfirmDialogModule,
    InputMaskModule

  ]
})
export class CandidateModule { }
