import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.scss']
})
export class MetronomeComponent implements OnInit {
  constructor() {}
  ticker: any;

  ngOnInit() {
    this.initTicker();

    // const interval = 1000;
    // this.startMetronome(interval);
  }

  initTicker() {
    $(document).ready(() => {
      this.ticker = document.getElementById("tick");
    });
  }

  startMetronome(interval) {
    setInterval(() => {
      this.tick();
    }, interval);
  }

  tick() {
    this.ticker.play();
  }
}
