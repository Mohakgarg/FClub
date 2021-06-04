// external dependencies
import { throwError, of } from 'rxjs';
import { switchMap, catchError, mergeMap } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';

// internal dependencies
import * as constant from '../../config/constant';
import * as error from 'common/utils/request/error';

/**
 * Append generic request headers to the ajax configuration
 * @param {String} endpoint The API endpoint
 * @param {object} config Ajax configuration
 */
async function appendRequestHeaders(config = {}) {
    // set content-type
    let contentType = constant.DEFAULT_REQUEST_HEADERS['default'];
    if (config.contentType) {
        contentType = constant.DEFAULT_REQUEST_HEADERS[config.contentType];
    }
    config.headers = {
        ...config.headers,
        ...contentType
    };


    return config;
}

/**
 * Dispaches an ajax call using fetch API.
 * @param {String} endpoint The API endpoint
 * @param {Object} config The fetch API config
 */
export function ajax$(endpoint, config) {
    return of(config).pipe(
        switchMap(appendRequestHeaders),
        mergeMap((config) =>
            fromFetch(endpoint, config).pipe(
                switchMap((response) => {
                    if (response.ok) {
                        return response.text();
                    } else {
                        return error.handleError({
                            response
                        });
                    }
                }),
                switchMap((data) => {
                    if (data.hasError) {
                        return throwError(data);
                    }
                    return of(data);
                }),
                switchMap((data) => of(data ? JSON.parse(data) : {})),
                catchError((err) => throwError(err))
            )
        )
    );
}