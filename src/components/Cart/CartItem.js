import React from 'react';
import './CartItem.css'

const CartItem = ({ item, onQuantityChange, onDelete }) => {
    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        onQuantityChange(item.id, newQuantity);
    };

    const handleDelete = () => {
        onDelete(item.id);
    };

    return (
        <div className="cart-item">
            <div className="cart-item-details">
                <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Price: ${item.price}</p>
                </div>
            </div>
            <div className="cart-item-actions">
                <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={handleQuantityChange}
                    className="cart-item-quantity"
                />
                <button onClick={handleDelete} className="cart-item-delete">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default CartItem;
