import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutRoutingModule } from './user-layout-routing.module';
import { UserLayoutComponent } from './user-layout.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { CarouselModule } from 'ngx-owl-carousel-2';
import { StickyNavModule } from 'ng2-sticky-nav';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { LatestJobsComponent } from './user-home/latest-jobs/latest-jobs.component';
import { MenuModule } from 'primeng/menu';
import {SplitButtonModule} from 'primeng/splitbutton';

@NgModule({
  declarations: [
    UserLayoutComponent,
    UserHomeComponent,
    UserFooterComponent,
    UserNavbarComponent,
    LatestJobsComponent
  ],
  imports: [
    CommonModule,
    UserLayoutRoutingModule,
    CarouselModule,
    StickyNavModule,
    DropdownModule,
    FormsModule,
    NgxPaginationModule,
    SplitButtonModule,
    MenuModule
  ],
  exports:[
    UserFooterComponent,
    UserNavbarComponent
  ]
})
export class UserLayoutModule { }
