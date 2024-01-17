import css from './Options.module.css';

export const Options = ({ name }) => {
  return <button className={css.button}>{name}</button>;
};
