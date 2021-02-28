import { cartActionTypes } from './cartActionTypes';

export const toggleCartHidden = (hidden) => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});
