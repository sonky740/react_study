import React from 'react';

import styles from './Button.module.scss';

function Button({ children, type, onClick }) {
  return (
    <button type={type || 'button'} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
