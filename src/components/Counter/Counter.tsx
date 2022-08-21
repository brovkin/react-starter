import React, { FC } from 'react';
import Button from '@components/ui/Button';
import { clearValue, decrement, increment } from '@features/counterSlice';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import counterSelector from '@selectors/counter';
import './Counter.scss';

const Counter: FC = () => {
  const counter = useAppSelector(counterSelector);
  const dispatch = useAppDispatch();

  return (
    <div className="counter__wrapper">
      <h1 className="counter__title">Counter</h1>
      <div className="counter__number-wrapper">
        <div className="counter__number">{counter}</div>
      </div>
      <Button
        className="counter__inc"
        clickHandler={() => dispatch(increment())}
      >
        Increment
      </Button>
      <Button
        className="counter__dec"
        clickHandler={() => dispatch(decrement())}
      >
        Decrement
      </Button>
      <Button
        className="counter__clear"
        clickHandler={() => dispatch(clearValue())}
      >
        Clear
      </Button>
    </div>
  );
};

export default Counter;
