import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(true);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {showProductList ? (
        <ProductList />
      ) : (
        <AboutUs onGetStarted={handleGetStartedClick} />
      )}
    </div>
  );
}

export default App;