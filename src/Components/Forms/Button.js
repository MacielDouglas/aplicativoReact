import React from 'react';
import styles from './FormsCss/Button.module.css';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
