import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './cartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // 1. Mostrar el total del carrito de las plantas
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const costNum = parseFloat(item.cost.replace('$', ''));
      return total + costNum * item.quantity;
    }, 0).toFixed(2);
  };

  // 2. Mostrar el costo total de cada planta en el carrito
  const calculateTotalCost = (item) => {
    const costNum = parseFloat(item.cost.replace('$', ''));
    return (costNum * item.quantity).toFixed(2);
  };

  // 4. Aumentar cantidad
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // 4. Disminuir cantidad (elimina si llega a 0)
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // 5. Botón de eliminar para quitar el artículo
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // 6. Botón de pago que muestra "Próximamente"
  const handleCheckoutShopping = (e) => {
    alert('Próximamente');
  };

  return (
    <div className="cart-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Total del Carrito: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.name} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc', padding: '15px 0', gap: '20px' }}>
            {/* 3. Miniatura, nombre y precio unitario */}
            <img className="cart-item-image" src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
            <div className="cart-item-details" style={{ flex: 1 }}>
              <div className="cart-item-name" style={{ fontWeight: 'bold', fontSize: '18px' }}>{item.name}</div>
              <div className="cart-item-cost" style={{ color: '#555' }}>Precio Unitario: {item.cost}</div>
              
              {/* 4. Botones para aumentar y disminuir la cantidad */}
              <div className="cart-item-quantity" style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)} style={{ padding: '5px 12px', cursor: 'pointer', fontWeight: 'bold' }}>-</button>
                <span className="cart-item-quantity-value" style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)} style={{ padding: '5px 12px', cursor: 'pointer', fontWeight: 'bold' }}>+</button>
              </div>

              {/* 2. Subtotal por planta */}
              <div className="cart-item-total" style={{ fontWeight: 'bold', color: '#2e7d32' }}>Subtotal: ${calculateTotalCost(item)}</div>
            </div>

            {/* 5. Botón de eliminar */}
            <button className="cart-item-delete" onClick={() => handleRemove(item)} style={{ backgroundColor: '#e53935', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="continue_shopping_btn" style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
        {/* 7. Botón de continuar comprando */}
        <button className="get-started-button" onClick={(e) => onContinueShopping(e)} style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>
          Continuar Comprando
        </button>
        {/* 6. Botón de pago */}
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)} style={{ backgroundColor: '#2196F3', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>
          Pagar (Próximamente)
        </button>
      </div>
    </div>
  );
};

export default CartItem;