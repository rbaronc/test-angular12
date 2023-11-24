import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  public count: number = 0;

  constructor() { }

  decrementcounter(): void {
    if (this.count > 0) {
      this.count -= 1;
    }
  }

  incrementcounter(): void {
    this.count += 1;
  }

  resetcounter(): void {
    this.count = 0;
  }

  ngOnInit(): void {
  }

}
