import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as CartLogo } from '../assets/cart.svg';
import { toggleCartHidden } from '../redux/cart/cartActions';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <span
      className="cart-icon"
      onClick={toggleCartHidden}
      role="button"
    >
      <CartLogo className="cart-logo" />
      <span className="item-count">0</span>
    </span>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
