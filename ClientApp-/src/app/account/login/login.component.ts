import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "Login";
  loginForm: FormGroup;
  loginErrorMessage: string;


  
  constructor(private accountServ: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$')]),
      password: new FormControl('',  [Validators.required,Validators.pattern("(?=^.{6,10}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?//&gt;.&lt;,])(?!.*\\s).*$")])
    });
  }

  onSubmit() {
    this.accountServ.login(this.loginForm.value).subscribe(() => {
      console.log("user logged in");
      this.router.navigateByUrl('/');
    }, error => {
      console.log(error);
      this.showLoginMessageError(error);
    })
  }
  showLoginMessageError(err:any){
    this.loginErrorMessage = err.error.message;
  }
  

}
