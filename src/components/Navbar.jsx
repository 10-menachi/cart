import { useSelector } from 'react-redux';
import { CartIcon } from '../utils';

const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Cart Application</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{quantity}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
