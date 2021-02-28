import React from 'react';

const CartItem = ({ item }) => {
  const {
    name, imageUrl, price, quantity,
  } = item;

  return (
    <div className="cart-item">
      <div
        className="cart-item-image"
      >
        <img
          src={imageUrl}
          alt="Cool Item"
        />
      </div>
      <div className="cart-desc">
        <p className="cart-item-name">{name}</p>
        <p className="cart-item-price">{quantity} x ${price}</p>
      </div>
    </div>
  );
};

export default CartItem;
