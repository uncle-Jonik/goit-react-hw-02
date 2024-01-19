import css from './App.module.css';
import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Feedback } from './Feedback/Feedback';
import { Options } from './Options/Options';

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
  let [count, setCount] = useState(localStorage);

  useEffect(() => {
    window.localStorage.setItem('settings', JSON.stringify(count));
  }, [count]);

  const handleClick = value => {
    setCount({ ...count, [value]: count[value] + 1 });
  };

  const handleClickReset = () => {
    window.localStorage.clear();
    setCount((count = config));
  };

  const nameParams = Object.keys(config);
  const totalFeedback = count.good + count.bad + count.neutral;
  const positive = Math.round(((count.good + count.neutral) / totalFeedback) * 100);
  const cheakAnalogy = JSON.stringify(config) === JSON.stringify(count);

  return (
    <div className={css.wrapper}>
      <Description />

      <Options
        checking={cheakAnalogy}
        onHandleClick={handleClick}
        onHandleClickReset={handleClickReset}
        params={nameParams}
      />

      <Feedback checking={cheakAnalogy} total={totalFeedback} positive={positive} obj={count} />
    </div>
  );
};
