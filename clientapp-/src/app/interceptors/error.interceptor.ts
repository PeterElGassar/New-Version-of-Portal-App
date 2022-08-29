import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export class ErrorInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next.handle(req).pipe(
            catchError(error =>{
                if(error.status === 404){
                    //redirect to not found page
                    console.log('redirect to not found page');
                    
                }
                else if(error.status === 500){
                        //resirect to server error page
                        console.log('resirect to server error page');
                        
                }

                return throwError(error);
            })
        )
    }

}