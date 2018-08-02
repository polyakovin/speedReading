import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-regression',
  templateUrl: './regression.component.html',
  styleUrls: ['./regression.component.scss']
})
export class RegressionComponent implements OnInit {
  constructor(private timer: TimerService) {}

  ngOnInit() {
  }

  setTimer() {
    const second = 1000;
    const minute = 60*second;
    this.timer.setTimer(10*minute);
  }
}
