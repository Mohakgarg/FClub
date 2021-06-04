// external dependencies.
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../user/user.reducers';

/**
 * Encompasses all the reducers into one global reducer
 * that is served to the store.
 */
const reducer = combineReducers({
    user: userReducer
});

export default reducer;