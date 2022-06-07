import React, { FC } from 'react';
import cn from 'classnames';
import {
  clearValue,
  decrement,
  increment,
} from '../../features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import './Counter.scss';

const Counter: FC = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="counter__wrapper">
      <div className="counter__title">Counter: {counter}</div>
      <div
        className={cn('counter__btn-wrapper', {
          ['counter__btn-wrapper_danger']: counter <= 3,
          ['counter__btn-wrapper_warning']: counter >= 4 && counter < 10,
          ['counter__btn-wrapper_success']: counter >= 10,
        })}
      >
        <button className="inc" onClick={() => dispatch(increment())}>
          Inc
        </button>
        <button className="dec" onClick={() => dispatch(decrement())}>
          Dec
        </button>
        <button className="clear" onClick={() => dispatch(clearValue())}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Counter;
