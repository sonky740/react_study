import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

export default function Header({ onShowCart }) {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
}
