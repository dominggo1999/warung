// Actions creator untuk nantinya di dispatch

import { userActionTypes } from './userActionTypes';

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
