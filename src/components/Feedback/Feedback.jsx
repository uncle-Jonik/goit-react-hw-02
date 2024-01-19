import css from './Feedback.module.css';

export const Feedback = ({ checking, total, positive, obj: { good, neutral, bad } }) => {
  return (
    <div className={css.feedbackBox}>
      {checking ? (
        <p>No feedback yet</p>
      ) : (
        <>
          <div className={css.stats}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
          </div>
          <div className={css.results}>
            <p>Total: {total}</p>
            <p>Positive: {positive}%</p>
          </div>
        </>
      )}
    </div>
  );
};
