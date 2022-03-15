import { Router } from '@angular/router';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title="Register"
  registerForm:FormGroup;
  //dropdown
  selectedRole:string;
  roleTypes: string[]=["Company","Candidate"];


  constructor(private fb:FormBuilder,private accountService:AccountService,
    private router:Router) { }

  ngOnInit(): void {
this.createRegisterForm();
  }

createRegisterForm(){
  this.registerForm = this.fb.group({
    displayName:[null,[Validators.maxLength(40),Validators.required]],
    role:[null,[Validators.required]],
    email:  [null,
      
      [Validators.required,Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$')],
  [this.ValidatorsEmailNotTaken()]
  ],
    password: [null,[Validators.required,Validators.pattern("(?=^.{6,10}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?//&gt;.&lt;,])(?!.*\\s).*$")]],
    confirmPassword: [null,[Validators.required,Validators.pattern("(?=^.{6,10}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?//&gt;.&lt;,])(?!.*\\s).*$")]]
  });


}

modelErrors:string[];
errorMessage:string;

onSubmit(){
  this.accountService.register(this.registerForm.value).subscribe(()=>{
    this.router.navigateByUrl('/');
  },error=>{
    
console.log(error);

  //  this.dealWithModelError(error);
  this.errorMessage = error.error.message;
  })
}


  // dealWithModelError(error: any) {

  //   if (error.status === 400) {

  //     this.errorMessage = this.transformError(error)
  //   } else {

  //     this.modelErrors = error.error;
  //   }
  // }

  // transformError(err: { [key: string]: any }) {
  //   const messages: string[] = [];

  //   if (err) {
  //     for (let key of err) {
  //       for (let message of err[key]) {
  //         messages.push(`${key}: ${message}`);
  //       }
  //     }
  //   }

  //   return messages;
  // }

  ValidatorsEmailNotTaken(): AsyncValidatorFn {
    return control => {
      
      return timer(500).pipe(

        switchMap(() =>{
          
              if(!control.value){
                
                return of(null);
              }
              return this.accountService.checkEmailExists(control.value).pipe(
                    map(res =>{
                      return res ? {eamilExists:true}:null;
                    })
              )
        })
      )
    }
  }

}
