import css from './App.module.css';
import { useState, useEffect } from 'react';
import { Description } from './Description/Description';

const config = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const localStorage = () => {
  const savedObject = window.localStorage.getItem('settings');
  if (savedObject !== null) {
    return JSON.parse(savedObject);
  }
  return config;
};

export const App = () => {
  const [count, setCount] = useState(localStorage);

  useEffect(() => {
    window.localStorage.setItem('settings', JSON.stringify(count));
  }, [count]);

  const handleClick = value => {
    setCount({ ...count, [value]: count[value] + 1 });
  };

  const handleClickReset = () => {};

  const cheakAnalogy = JSON.stringify(config) === JSON.stringify(count);

  return (
    <div className={css.wrapper}>
      <Description />
      <div>
        <button onClick={() => handleClick('good')}>Good</button>
        <button onClick={() => handleClick('neutral')}>Neutral</button>
        <button onClick={() => handleClick('bad')}>Bad</button>
        {cheakAnalogy ? null : <button onClick={handleClickReset}>Reset</button>}
      </div>
      <div>
        {cheakAnalogy ? (
          <p>No feedback yet</p>
        ) : (
          <>
            <p>Good: {count.good}</p>
            <p>Neutral: {count.neutral}</p>
            <p>Bad: {count.bad}</p>
          </>
        )}
      </div>
    </div>
  );
};
