import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;
  constructor(private spinnerService: NgxSpinnerService) { }


  busy() {
    this.busyRequestCount++;
    this.spinnerService.show(undefined, {
      type: 'ball-pulse-sync',
      bdColor: 'rgba(250,250,250,0.6)',
      color: '#3b80bf',
      fullScreen: true,
      size: 'medium'
    });
  }

  HideBusy() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}
