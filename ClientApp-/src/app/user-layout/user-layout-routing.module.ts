import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLayoutComponent } from './user-layout.component';

const routes: Routes = [

  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        component: UserHomeComponent,
      },
    ],
  },

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
