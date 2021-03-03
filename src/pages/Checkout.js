import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartPriceCount } from '../redux/cart/cartSelectors';
import CheckoutItem from '../components/CheckoutItem';
import Button from '../components/Button';
import { emptyCart } from '../redux/cart/cartActions';

const Checkout = ({ cartItems, totalPrice, emptyCart }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="row">
          <div className="table-header-item column">
            <span>Product</span>
          </div>
          <div className="table-header-item column">
            <span>Description</span>
          </div>
          <div className="table-header-item column">
            <span>Quantity</span>
          </div>
          <div className="table-header-item column">
            <span>Price</span>
          </div>
          <div className="table-header-item column">
            <span>Remove</span>
          </div>
        </div>
        {
          cartItems.length ? cartItems.map((item) => (
            <CheckoutItem
              key={item.id}
              item={item}
            />
          )) : null
        }
      </div>
      <div className="checkout-total">
        <p>Total : ${totalPrice}</p>
        <Button
          clickHandler={emptyCart}
          title="Empty Cart"
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartPriceCount,
});

const mapDispatchToProps = (dispatch) => ({
  emptyCart: () => dispatch(emptyCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
