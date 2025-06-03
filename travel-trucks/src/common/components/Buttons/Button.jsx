import styles from './Button.module.css';

const Button = ({ text, onClick, ...props }) => {
  return (
    <button className={styles.button} onClick={onClick} {...props}>
      {text}
    </button>
  );
};

export default Button;
