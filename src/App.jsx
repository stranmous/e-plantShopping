import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <AboutUs />
      <Link to="/products">
        <button className="get-started-btn">Get Started</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router basename="/paradise-nursery">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;