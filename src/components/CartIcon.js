import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as CartLogo } from '../assets/cart.svg';
import { toggleCartHidden } from '../redux/cart/cartActions';
import { selectCartItemsCount } from '../redux/cart/cartSelectors';

const CartIcon = ({ toggleCartHidden, totalItems }) => {
  const biggerThanOneHundred = totalItems > 99;

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

const mapStateToProps = (state) => {
  return ({
    totalItems: selectCartItemsCount(state),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
