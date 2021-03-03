import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from './Button';
import CartItem from './CartItem';
import { selectCartItems } from '../redux/cart/cartSelectors';

const CartDropdown = ({ cartItems }) => {
  console.log('ahnajwyugew');

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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
