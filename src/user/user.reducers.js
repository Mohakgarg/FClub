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
  deleteUserInfo: {
    isUserDeletingInProcess: false,
    error: null,
    details: null
  },
  editUserInfo: {
    isUserEditingInProcess: false,
    error: null,
    details: null
  }
});

export const userReducers = {};

/**
 * Reducer that gets called when fetchCompanies action is dispatched.
 * @param {Object} state The company state.
 */
userReducers[userAction.fetchUserList] = function (state) {
  state.isFetching = true;
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
 * Reducer that gets called when fetchCompanies action is dispatched.
 * @param {Object} state The company state.
 */
userReducers[userAction.addUser] = function (state) {
  state.isFetching = true;
};

/**
 * Reducer to store all the companies.
 * @param {Object} state The company state.
 * @param {Object} action The fetchCompanyFulfilled action.
 */
userReducers[userAction.addUserFulfilled] = function (
  state,
  action
) {
  state.isFetching = false;
};

/**
 * Reducer that gets called fetchCompanyFailed action is dispatched
 * @param {Object} state The company state.
 */
userReducers[userAction.addUserFailed] = function (state) {
  state.isFetching = false;
};



/**
 * Reducer that gets called when fetchCompanies action is dispatched.
 * @param {Object} state The company state.
 */
userReducers[userAction.deleteUser] = function (state) {
  state.deleteUserInfo.isUserDeletingInProcess = true;
};

/**
 * Reducer to store all the companies.
 * @param {Object} state The company state.
 * @param {Object} action The fetchCompanyFulfilled action.
 */
userReducers[userAction.deleteUserFulfilled] = function (
  state,
  action
) {
  state.deleteUserInfo.isUserDeletingInProcess = false;
};

/**
 * Reducer that gets called fetchCompanyFailed action is dispatched
 * @param {Object} state The company state.
 */
userReducers[userAction.deleteUserFailed] = function (state) {
  state.deleteUserInfo.isUserDeletingInProcess = false;
};


/**
 * Reducer that gets called when fetchCompanies action is dispatched.
 * @param {Object} state The company state.
 */
userReducers[userAction.editUser] = function (state) {
  state.editUserInfo.isUserEditingInProcess = true;
};

/**
 * Reducer to store all the companies.
 * @param {Object} state The company state.
 * @param {Object} action The fetchCompanyFulfilled action.
 */
userReducers[userAction.editUserFulfilled] = function (
  state,
  action
) {
  state.editUserInfo.isUserEditingInProcess = false;
};

/**
 * Reducer that gets called fetchCompanyFailed action is dispatched
 * @param {Object} state The company state.
 */
userReducers[userAction.editUserFailed] = function (state) {
  state.editUserInfo.isUserEditingInProcess = false;
};



/**
 * Selectors to expose to components.
 */
export const {
  selectAll: selectAllUser,
  selectById: getUserById
} = userEntityAdapter.getSelectors((state) => state.user);

export default createReducer(userInitialState, userReducers);
