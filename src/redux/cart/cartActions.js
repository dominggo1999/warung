import { cartActionTypes } from './cartActionTypes';

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: cartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const emptyCart = (item) => ({
  type: cartActionTypes.EMPTY_CART,
});
