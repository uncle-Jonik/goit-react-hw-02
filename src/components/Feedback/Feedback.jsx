// import css from './Feedback.module.css';

export const Feedback = ({ stats }) => {
  return (
    <div>
      <p>Good: {stats.good}</p>
      <p>Neutral: {stats.neutral}</p>
      <p>Bad: {stats.bad}</p>
    </div>
  );
};
