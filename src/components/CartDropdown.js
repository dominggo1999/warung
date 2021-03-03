import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import Button from './Button';
import CartItem from './CartItem';
import { selectCartItems } from '../redux/cart/cartSelectors';
import { toggleCartHidden } from '../redux/cart/cartActions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const displayCheckoutPage = () => {
    history.push('/checkout');
    dispatch(toggleCartHidden(toggleCartHidden));
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown-items">
        {
          cartItems.length ? cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          )) : <h3 className="empty-message">Your cart is empty</h3>
        }
      </div>
      <Button
        clickHandler={displayCheckoutPage}
        title="Go to checkout"
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
