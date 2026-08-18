import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="content">
            <h1>Bienvenido a Paradise Nursery</h1>
            <p>El mejor lugar para encontrar las plantas que tu hogar necesita.</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Comenzar
            </button>
          </div>
          <AboutUs />
        </div>
      ) : (
        <div>
          <h2>Catálogo de Plantas</h2>
          {/* Aquí irá tu componente ProductList */}
        </div>
      )}
    </div>
  );
}

export default App;