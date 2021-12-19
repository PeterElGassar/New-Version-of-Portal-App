import { AccountService } from './../../account/account.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/user';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  currentUser$: Observable<IUser>
  currentUserID$: Observable<string>


  adminDropdownItems: MenuItem[];
  candidateDropdownItems: MenuItem[];
  companyDropdownItems: MenuItem[];
  userId: string ;

  constructor(private accountSerrvice: AccountService) {
    this.getUserId();
   }

  ngOnInit(): void {
    this.currentUser$ = this.accountSerrvice.currentUser$;
    this.currentUserID$ = this.accountSerrvice.currentUserId$;
    this.getUserId();
    console.log(this.userId);
  }

  logout() {
    this.accountSerrvice.logout();
  }

  getDrops() {

    this.candidateDropdownItems = [
      {
        label: 'Profile',
        icon: 'pi pi-user-edit',
        routerLink: [`/profile/${this.userId}`],
      },
      { separator: true },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => {
          this.logout();
        },
      },
    ];

    this.adminDropdownItems = [
      {
        label: 'Dashboard',
        icon: 'pi pi-sliders-h',
        routerLink: ['/dashboard'],
      },

      { separator: true },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => {
          this.logout();
        },
      },
    ];

    this.companyDropdownItems = [
      // { label: 'دوراتي', icon: 'pi pi-video', routerLink: ['/myCourses'] },
      {
        label: 'Company Profile',
        icon: 'pi pi-user-edit',
        routerLink: [`/instructor-account/${this.userId}`],
      },
      {
        label: 'Jobs',
        icon: 'pi pi-heart',
        routerLink: [`/instructor-dashboard/${this.userId}`],
      },

      {
        label: 'Applied Candidates',
        icon: 'pi pi-heart',
        routerLink: [`/instructor-dashboard/${this.userId}`],
      },

      { separator: true },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => {
          this.logout();
        },
      },
    ];
  }

  getUserId() {
    this.accountSerrvice.currentUserId$.subscribe((userId) => {
      if (userId) {
        debugger
        this.userId = userId;
        this.getDrops();
    
      }
    }, error => {
      console.log(error);

    })
  }


}
