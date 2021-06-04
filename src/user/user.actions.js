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
