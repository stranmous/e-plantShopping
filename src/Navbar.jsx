import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
      </div>
      <div className="cart-icon">
        <Link to="/cart">
          <span>🛒 Cart ({totalItems})</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;