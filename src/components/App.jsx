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

  return (
    <div className={css.wrapper}>
      <Description />
      <div>
        <button onClick={() => handleClick('good')}>good</button>
        <button onClick={() => handleClick('neutral')}>neutral</button>
        <button onClick={() => handleClick('bad')}>bad</button>
      </div>
      <div>
        {JSON.stringify(config) === JSON.stringify(count) ? (
          <p>No feedback yet</p>
        ) : (
          <>
            <p>good: {count.good}</p>
            <p>neutral: {count.neutral}</p>
            <p>bad: {count.bad}</p>
          </>
        )}
      </div>
    </div>
  );
};
