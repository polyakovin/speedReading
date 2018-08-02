import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  isSet = false;
  alarmContainer: any;

  constructor() { }

  initTimer() {
    $(document).ready(() => {
      this.alarmContainer = document.getElementById("alarm");
    });
  }

  setTimer(milliseconds) {
    this.isSet = true;

    setTimeout(() => {
      this.isSet = false;
      this.alarmContainer.play();
    }, milliseconds);
  }
}
