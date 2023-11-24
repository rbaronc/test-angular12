import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  public count$: Observable<number>;
  public currentCount: number =  0;

  constructor(private store: Store<{ count: number }>) { 
    this.count$ = store.select('count');
    this.count$.subscribe(count => this.currentCount = count);    
  }

  decrementcounter(): void {
    if(this.currentCount > 0) {
      this.store.dispatch(decrement());
    }
  }

  incrementcounter(): void {
    this.store.dispatch(increment());
  }

  resetcounter(): void {
    this.store.dispatch(reset());
  }

}
