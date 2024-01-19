import css from './App.module.css';
import { useState } from 'react';
import { Description } from './Description/Description';

export const App = () => {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // const handleClick = event => {
  //   const value = event.currentTarget.textContent;
  //   setCount({ ...count, value: count.value + 1 });
  // };
  const handleClickGood = () => {
    setCount({
      ...count,
      good: count.good + 1,
    });
  };
  const handleClickNeutral = () => {
    setCount({
      ...count,
      neutral: count.neutral + 1,
    });
  };
  const handleClickBad = () => {
    setCount({
      ...count,
      bad: count.bad + 1,
    });
  };

  return (
    <div className={css.wrapper}>
      <Description />
      <div>
        <button onClick={handleClickGood}>good</button>
        <button onClick={handleClickNeutral}>neutral</button>
        <button onClick={handleClickBad}>bad</button>
      </div>
      <div>
        <p>good: {count.good}</p>
        <p>neutral: {count.neutral}</p>
        <p>bad: {count.bad}</p>
      </div>
    </div>
  );
};
