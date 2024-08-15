// CartSummary.js
import React from 'react';
import './CartSummary.css'; // Import your custom CSS for styling

const CartSummary = ({ cartItems, onQuantityChange, onDelete }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <div className="cart-items-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </div>
            <div className="cart-item-actions">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
                className="cart-item-quantity"
              />
              <button onClick={() => onDelete(item.id)} className="cart-item-delete">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};

export default CartSummary;
