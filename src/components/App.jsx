import css from './App.module.css';
import { useState } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';

export const App = () => {
  const [feedbackStats, feedbackStatsSet] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const name = Object.keys(feedbackStats);

  return (
    <div className={css.wrapper}>
      <Description />
      <div className={css.buttonBox}>
        <Options name={name[0]} />
        <Options name={name[1]} />
        <Options name={name[2]} />
      </div>
      <div className={css.statsBox}>
        <Feedback stats={feedbackStats} />
      </div>
    </div>
  );
};
