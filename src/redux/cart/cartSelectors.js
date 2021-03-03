import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden,
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems,
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumulatedItem, currentItem) => {
    return accumulatedItem + currentItem.quantity;
  }, 0),
);

export const selectCartPriceCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumulatedItem, currentItem) => {
    return accumulatedItem + currentItem.quantity * currentItem.price;
  }, 0),
);
