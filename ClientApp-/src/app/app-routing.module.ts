import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./user-layout/user-layout.module').then((mod) => mod.UserLayoutModule),
  },
  
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((mod) => mod.AccountModule),
  },
  {
    path: 'company',
    loadChildren: () =>
      import('./company/company.module').then((mod) => mod.CompanyModule),
  },
  
  {
    path: 'candidate',
    loadChildren: () =>
      import('./candidate/candidate.module').then((mod) => mod.CandidateModule),
  },

  { path: "**", redirectTo: "", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
