import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import Navbar from './Navbar';

const plantsArray = [
  { category: "Air Purifying", name: "Snake Plant", image: "/snake.jpg", price: 15 },
  { category: "Air Purifying", name: "Spider Plant", image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=400", price: 12 },
  { category: "Low Light", name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=400", price: 18 },
  { category: "Low Light", name: "Pothos", image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=400", price: 10 },
  { category: "Pet Friendly", name: "Boston Fern", image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=400", price: 14 },
  { category: "Pet Friendly", name: "Parlor Palm", image: "/palm.jpg", price: 20 }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const categories = [...new Set(plantsArray.map(plant => plant.category))];

  return (
    <div>
      <Navbar />
      <div className="product-list">
        {categories.map((category, index) => (
          <div key={index}>
            <h2>{category}</h2>
            <div className="plant-grid">
              {plantsArray.filter(plant => plant.category === category).map((plant, idx) => (
                <div key={idx} className="plant-card">
                  <img src={plant.image} alt={plant.name} width="150" />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={cartItems.some(item => item.name === plant.name)}
                  >
                    {cartItems.some(item => item.name === plant.name) ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;