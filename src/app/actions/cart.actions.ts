import {
    createAction,
    props,
} from '@ngrx/store';

export const order = createAction(
  '[Menu Component] Order',
  props<{ id: number }>()
);
