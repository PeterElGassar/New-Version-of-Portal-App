import { IUser } from './../shared/models/user';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.appUrl;
  private currentUserSource = new BehaviorSubject<IUser>(null);
  private currentUserIdSource = new BehaviorSubject<string>(null);

  currentUser$ = this.currentUserSource.asObservable();
  currentUserId$ = this.currentUserIdSource.asObservable();

  constructor(private http: HttpClient,private router:Router) { }


  getCurrentUserValue() {
    return this.currentUserSource.value;
  }
  getCurrentUserIdValue() {
    return this.currentUserIdSource.value;
  }

  loadCurrentUser(token: string) {
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${token}`);

    return this.http.get(this.baseUrl + 'account', { headers } ).pipe(

      map((user:IUser)=>{
        if(user){
          // console.log(user)
              localStorage.setItem("token",user.token);
              this.currentUserSource.next(user);
              this.currentUserIdSource.next(user.id);
        }
      })
    );
  }



  login(values: any) {
    return this.http.post(this.baseUrl + "account/login", values).pipe(

      map((user: IUser) => {
        if (user) {
          // debugger;
          localStorage.setItem("token", user.token);
          this.currentUserSource.next(user);
          this.currentUserIdSource.next(user.id);
        }
      })
    );
  }


  register(values: any) {
   return this.http.post(this.baseUrl + "account/register", values).pipe(

      map(
        (user: IUser) => {
          if (user) {
            localStorage.setItem("token", user.token);
            this.currentUserSource.next(user);
            this.currentUserIdSource.next(user.id);
          }
        }

      )
    )
  }

  logout() {
    localStorage.removeItem("token");
    this.currentUserSource.next(null);
    this.currentUserIdSource.next(null);
    this.router.navigateByUrl("/");
  }


  checkEmailExists(email:string){
    let headers = new HttpHeaders({"skipLoader": 'true'})

    return this.http.get(this.baseUrl+ `account/emailexists?email=${email}`, {headers});
  }
}
