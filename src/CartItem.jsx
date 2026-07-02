import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h2>Total Items: {calculateTotalItems()}</h2>
        <h2>Total Cost: ${calculateTotalAmount()}</h2>

        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} width="100" />
              <div>
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price}</p>
                <p>Total: ${item.price * item.quantity}</p>
              </div>
              <div className="cart-controls">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
                <button onClick={() => handleRemove(item)}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-actions">
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
          <button onClick={() => alert('Coming Soon')}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;