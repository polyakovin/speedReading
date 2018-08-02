import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-articulation',
  templateUrl: './articulation.component.html',
  styleUrls: ['./articulation.component.scss']
})
export class ArticulationComponent implements OnInit {

  constructor(private timer: TimerService) {}

  ngOnInit() {
  }

  setTimer() {
    const second = 1000;
    const minute = 60*second;
    this.timer.setTimer(10*minute);
  }
}
