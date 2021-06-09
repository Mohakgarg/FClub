// external dependencies
import { createAction } from '@reduxjs/toolkit';

/**
 * Action to fetch user list.
 */
export const fetchUserList = createAction(
  '[Users List] Fetch Users List'
);

/**
 * Action to response when fetchUserListFulfilled action is fulfilled
 */
export const fetchUserListFulfilled = createAction(
  '[Users List] Fetch Users List Fulfilled'
);

/**
 * Action to response when fetchUserListFailed action is failed.
 */
export const fetchUserListFailed = createAction(
  '[Users List] Fetch Users List Failed'
);


/**
 * Action to add user.
 */
export const addUser = createAction(
  '[Add User] Add User'
);

/**
 * Action to response when addUserFulfilled action is fulfilled
 */
export const addUserFulfilled = createAction(
  '[Add User] Add User Fulfilled'

);

/**
 * Action to response when addUserFailed action is failed.
 */
export const addUserFailed = createAction(
  '[Add User] Add User Failed'
);

/**
 * Action to response when addUserFailed action is failed.
 */
export const noop = createAction(
  '[Noop] No Action'
);

/**
 * Action to delete user.
 */
export const deleteUser = createAction(
  '[Delete User] Delete User'
);

/**
 * Action to response when deleteUserFulfilled action is fulfilled
 */
export const deleteUserFulfilled = createAction(
  '[Delete User] Delete User Fulfilled'

);

/**
 * Action to response when deleteUserFailed action is failed.
 */
export const deleteUserFailed = createAction(
  '[Delete User] Delete User Failed'
);

/**
 * Action to edit user.
 */
export const editUser = createAction(
  '[Edit User] Edit User'
);

/**
 * Action to response when deleteUserFulfilled action is fulfilled
 */
export const editUserFulfilled = createAction(
  '[Edit User] Edit User Fulfilled'

);

/**
 * Action to response when deleteUserFailed action is failed.
 */
export const editUserFailed = createAction(
  '[Edit User] Edit User Failed'
);
