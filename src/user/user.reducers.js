// external dependencies
import { createEntityAdapter, createReducer } from '@reduxjs/toolkit';

// internal dependencies
import * as userAction from './user.actions';

const userEntityAdapter = createEntityAdapter({
  selectId: (data) => {
    return data._id;
  }
});

const userInitialState = userEntityAdapter.getInitialState({
  isFetching: false,
});

export const userReducers = {};

/**
 * Reducer that gets called when fetchCompanies action is dispatched.
 * @param {Object} state The company state.
 */
userReducers[userAction.fetchUserList] = function (state) {
  if (state.invalidateCache) {
    state.isFetching = true;
  }
};

/**
 * Reducer to store all the companies.
 * @param {Object} state The company state.
 * @param {Object} action The fetchCompanyFulfilled action.
 */
userReducers[userAction.fetchUserListFulfilled] = function (
  state,
  action
) {
  state.isFetching = false;
  let newState = userEntityAdapter.setAll(state, action.payload);
  return newState;
};

/**
 * Reducer that gets called fetchCompanyFailed action is dispatched
 * @param {Object} state The company state.
 */
userReducers[userAction.fetchUserListFailed] = function (state) {
  state.isFetching = false;
};

/**
 * Selectors to expose to components.
 */
export const {
  selectAll: selectAllUser
} = userEntityAdapter.getSelectors((state) => state.user);

export default createReducer(userInitialState, userReducers);
