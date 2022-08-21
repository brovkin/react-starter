import React, { FC } from 'react';
import Counter from '../Counter';
import './App.scss';

const App: FC = () => {
  return (
    <div className="welcome-block">
      <Counter />
    </div>
  );
};

export default App;
