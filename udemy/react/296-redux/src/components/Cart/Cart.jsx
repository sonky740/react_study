import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(({ id, name, price, totalPrice, quantity }) => (
          <CartItem
            key={id}
            item={{
              id,
              title: name,
              quantity,
              total: totalPrice,
              price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
