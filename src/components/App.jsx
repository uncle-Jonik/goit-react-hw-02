import css from './App.module.css';
import { useState } from 'react';
import { Description } from './Description/Description';

export const App = () => {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

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
        <p>good: {count.good}</p>
        <p>neutral: {count.neutral}</p>
        <p>bad: {count.bad}</p>
      </div>
    </div>
  );
};
