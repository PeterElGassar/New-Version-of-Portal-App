import { AccountService } from './account/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'clientapp';

  constructor(private accountService: AccountService) {

  }
  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const token = localStorage.getItem("token");
    if (token) {
      this.accountService.loadCurrentUser(token).subscribe(() => {
        console.log("Loaded User");

      }, error => {
        console.log(error);

      });
    }
  }
}
