import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import CartItem from './CartItem';

const CartDropdown = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown-items">
        {
          cartItems.length ? cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          )) : <h1>Your cart is empty</h1>
        }
      </div>
      <Button title="Go to checkout" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
