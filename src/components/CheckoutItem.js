import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { connect } from 'react-redux';
import { removeItem, addItem, removeItemFromCart } from '../redux/cart/cartActions';

const CheckoutItem = ({
  item, removeItem, addItem, removeItemFromCart,
}) => {
  const {
    name, imageUrl, price, quantity,
  } = item;

  return (
    <div className="row table-item">
      <div className="column item-image">
        <span><img
          src={imageUrl}
          alt="Preview"
        />
        </span>
      </div>
      <div className="column item-name">
        <span>{name}</span>
      </div>
      <div className="column item-quantity">
        <span
          role="button"
          onClick={() => removeItemFromCart(item)}
          className="qt-btn"
        > <FaLessThan />
        </span>
        <span>{quantity}</span>
        <span
          role="button"
          onClick={() => addItem(item)}
          className="qt-btn"
        > <FaGreaterThan />
        </span>
      </div>
      <div className="column item-price">
        <span>${price}</span>
      </div>
      <div className="column item-remove">
        <button
          className="remove-button"
          onClick={() => removeItem(item)}
        >
          <IconContext.Provider value={{ size: 40 }}>
            <span><TiDelete /> </span>
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
