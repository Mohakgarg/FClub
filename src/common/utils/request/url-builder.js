import { API_METHODS } from '../../config/constant';

//const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

/**
 * Replaces the dynaic placeholder in the string with
 * path params object
 * @param {String} url The URL
 * @param {Object} pathParamsObj The path params object
 */
export function replaceUrlWithPathParams(url, pathParamsObj) {
  const tokens = url.split('/');
  const updatedTokens = tokens.map((token) => {
    const prop = token.replace(':', '');
    let result;
    if (pathParamsObj[prop]) {
      result = pathParamsObj[prop];
    } else {
      result = token;
    }
    return result;
  });
  return updatedTokens.join('/');
}

/**
 * Constructs API endpoint
 * @param {String} path The URL with path
 * @param {Object} config The endpoint configuration object.
 * The endpoint configuration object includes following properties:
 * 1. baseUrl: The base URL
 * 2. pathParams: Key/value pair with param params as key.
 */
export function constructApiEndpoint(path = '', config = {}) {
  let url = path;
  if (config.pathParams) {
    url = replaceUrlWithPathParams(url, config.pathParams);
  }
  return new URL(url);
}

/**
 * Appends query params to supplied URL.
 * @param {String} url The URL
 * @param {Object} queryParamsObj The query params object.
 */
export function appendQueryParamsToUrl(url, queryParamsObj = {}) {
  const keys = Object.keys(queryParamsObj);
  let urlWithQueryParams = url;
  if (keys.length > 0) {
    keys.forEach((key) =>
      urlWithQueryParams.searchParams.append(key, queryParamsObj[key])
    );
  }
  return urlWithQueryParams;
}

/**
 * Constructs API options
 * @param {String} method API method
 * @param {Object} data Data to be send alongwith API
 */
export function constructApiOptions(method = API_METHODS.GET, data) {
  const options = {
    method
  };
  if ((method === API_METHODS.POST || method === API_METHODS.PATCH) && data) {
    options.body = JSON.stringify(data);
  }
  return options;
}
