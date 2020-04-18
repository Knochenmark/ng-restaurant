import { Observable } from 'rxjs';

import { Component } from '@angular/core';
import {
    select,
    Store,
} from '@ngrx/store';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent {
  cart$: Observable<number[]>;

  constructor(private store: Store<any>) {
    this.cart$ = this.store.pipe(select('cart'));
  }
}
