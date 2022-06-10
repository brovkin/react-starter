import { Middleware } from '@reduxjs/toolkit';
import { addValue } from '@features/counter/counterSlice';

export const counterMiddleware: Middleware =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    const { counter } = getState();

    if (action.type === 'counter/increment' && counter.value >= 10) {
      dispatch(addValue(10));
    }

    next(action);
  };
