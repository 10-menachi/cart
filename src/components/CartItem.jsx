import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { decrease, increase, removeItem } from '../redux/cart/cartSlice';
import { ChevronDown, ChevronUp } from '../utils';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const {
    id, title, price, img, amount,
  } = item;
  const handleRemoveItem = () => {
    if (id) dispatch(removeItem(id));
  };
  const handleIncrease = () => {
    if (amount < 10) dispatch(increase(id));
  };
  const handleDecrease = () => {
    if (amount > 0) dispatch(decrease(id));
  };
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">
          $
          {price}
        </h4>
        <button type="button" className="remove-btn" onClick={handleRemoveItem}>Remove</button>
      </div>
      <div>
        <button type="button" className="amount-btn" onClick={handleIncrease}>
          <ChevronUp />
        </button>
        <p>{amount}</p>
        <button type="button" className="amount-btn" onClick={handleDecrease}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
