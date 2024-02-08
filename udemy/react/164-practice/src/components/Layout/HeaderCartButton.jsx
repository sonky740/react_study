import { useContext, useState, useEffect } from 'react';

import styles from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

export default function HeaderCartButton({ type = 'button', onClick }) {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnStyles = `${styles.button} ${styles.bump}`;

  useEffect(() => {
    if (items.length === 0) return;

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [numberOfCartItems, items]);

  return (
    <button
      className={btnIsHighlighted ? btnStyles : styles.button}
      type={type}
      onClick={onClick}
    >
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}
