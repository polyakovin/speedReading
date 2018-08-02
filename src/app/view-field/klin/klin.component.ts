import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../timer.service';

@Component({
  selector: 'app-klin',
  templateUrl: './klin.component.html',
  styleUrls: ['./klin.component.scss']
})
export class KlinComponent implements OnInit {
  tableSize = 20;
  wordLength = 2;
  step = 8;
  alphabet = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','щ','ш','ы','э','ю','я'];
  klinLeft = '';
  klinRight = '';
  counter = [];

  constructor(private timer: TimerService) {}

  ngOnInit() {
    let i = 0;
    while (i < this.tableSize) {
      this.counter.push(i + 1);
      i++;
    }

    this.klinLeft = this.makeWords();
    this.klinRight = this.makeWords();

    setTimeout(() => {
      $(".klin_left div").css("margin-right", i => {
        return i*this.step + "px";
      });

      $(".klin_right div").css("margin-left", i => {
        return i*this.step + "px";
      });
    }, 1000)
  }

  makeWords() {
    let klin = '';
    for (let j = 0; j < this.tableSize; j++) {
      let word = "";

      for (let i = 0; i < this.wordLength; i++) {
        const index = (Math.random()*(this.alphabet.length - 1)).toFixed(0);
        word += this.alphabet[index];
      }

      klin += `<div>${word}</div>`;
    }

    return klin;
  }

  setTimer() {
    const second = 1000;
    const minute = 60*second;
    this.timer.setTimer(2*minute);
  }
}
