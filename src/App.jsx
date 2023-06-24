import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CartItems from './components/CartItems';
import Navbar from './components/Navbar';
import { calculateTotals } from './redux/cart/cartSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <CartItems />
    </>
  );
};

export default App;
