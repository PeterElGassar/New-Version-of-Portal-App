import { Injectable } from '@angular/core';
import { BusyService } from './../core/services/busy.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { delay, finalize } from 'rxjs/operators';

@Injectable()
export class LoderInterceptor implements HttpInterceptor{


    constructor(private bustServe :BusyService) {
       }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(!req.headers.get('skipLoader'))
            this.bustServe.busy();

        return next.handle(req).pipe(
            delay(600),
            finalize(()=> {                
                this.bustServe.HideBusy();
            })
        )
    }

}