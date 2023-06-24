import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/cart/cartSlice';
import CartItem from './CartItem';

const CartItems = () => {
  const { items, total, quantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <section className="cart">
      <h2>Your Bag</h2>
      {quantity < 1 && <h4 className="empty-cart">Cart is empty</h4>}
      <div>
        {items.map((item) => <CartItem key={item.id} item={item} />)}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total
            {' '}
            <span>
              $
              {total}
            </span>
          </h4>
        </div>
        <button type="button" className="btn clear-btn" onClick={handleClearCart}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartItems;
