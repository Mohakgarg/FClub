// external dependencies
import { of } from 'rxjs';
import { mergeMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { ofType } from 'redux-observable';

// internal dependencies
import * as constant from '../common/config/constant';
import * as requestUrlBuilder from '../common/utils/request/url-builder';
import * as userAction from './user.actions';

/**
 * Epic to fetch recruiters information.
 * @param {Object} action$ The recruiter management action stream.
 * @param {Object} store$ The redux store stream.
 * @param {Object} deps The epic dependencies
 */
export function fetchRecruitersInformationEpic(action$, store$, deps) {
  return action$.pipe(
    ofType(userAction.fetchUserList),
    withLatestFrom(store$),
    mergeMap((data) => {
      //  const store = data[1];
      const endpoint = requestUrlBuilder.constructApiEndpoint(
        constant.API_ENDPOINTS.USERS
      );
      return deps
        .ajax$(endpoint, {
          method: constant.API_METHODS.GET
        })
        .pipe(
          map((response) => {
            return userAction.fetchUserListFulfilled(
              response
            );
          }),
          catchError((error) =>
            of(userAction.fetchUserListFailed(error))
          )
        );
    })
  );
}

/**
 * Epic to fetch recruiters information.
 * @param {Object} action$ The recruiter management action stream.
 * @param {Object} deps The epic dependencies
 */
export function addUserEpic(action$, _, deps) {
  return action$.pipe(
    ofType(userAction.addUser),
    mergeMap((data) => {
      //  const store = data[1];
      const endpoint = requestUrlBuilder.constructApiEndpoint(
        constant.API_ENDPOINTS.USERS
      );
      return deps
        .ajax$(endpoint, {
          method: constant.API_METHODS.POST,
          body: JSON.stringify(data.payload)
        })
        .pipe(
          map((response) => {
            return userAction.addUserFulfilled(
              response
            );
          }),
          catchError((error) =>
            of(userAction.addUserFailed(error))
          )
        );
    })
  );
}

/**
 * Epic to fetch recruiters information.
 * @param {Object} action$ The recruiter management action stream.
 * @param {Object} deps The epic dependencies
 */
export function addUserFulfilledEpic(action$, _, deps) {
  return action$.pipe(
    ofType(userAction.addUserFulfilled),
    mergeMap((data) => {
      deps.history.push('/');
      return of(userAction.noop());
    })
  );
}
