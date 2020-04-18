import {
    createReducer,
    on,
} from '@ngrx/store';

import { order } from '../actions/cart.actions';

export interface State {
  cart: number[];
}

export const initialState: State = {
  cart: [],
};

const CartReducer = createReducer(
  initialState,
  on(order, (state, { id }) => {
    console.log('order action with', id);
    return {
      ...state,
      cart: [...state.cart, id],
    };
  })
);

export function cartReducer(state, action) {
  return CartReducer(state, action);
}
