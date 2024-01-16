import css from './App.module.css';
import { Description } from './Description/Description';

export const App = () => {
  return (
    <div className={css.wrapper}>
      <Description />
    </div>
  );
};
