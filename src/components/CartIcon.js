import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as CartLogo } from '../assets/cart.svg';
import { toggleCartHidden } from '../redux/cart/cartActions';

const CartIcon = ({ toggleCartHidden, totalItems }) => {
  const biggerThanOneHundred = totalItems > 99;
  console.log(biggerThanOneHundred);

  return (
    <span
      className="cart-icon"
      onClick={toggleCartHidden}
      role="button"
    >
      <CartLogo className={`cart-logo ${biggerThanOneHundred ? 'big' : null}`} />
      <span className="item-count">{totalItems}</span>
    </span>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  totalItems: state.cart.cartItems.reduce((accumulatedItem, currentItem) => {
    return accumulatedItem + currentItem.quantity;
  }, 0),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
