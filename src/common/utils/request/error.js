// exteral dependencies
import { isArray } from 'lodash';

// internal dependencies

/**
 * Constructs a generic error.
 * @param {Object|String} error The error object or string.
 */
function constructGenericError(error) {
  let message;
  if (error.message) {
    message = error.message;
  } else if (typeof error === 'string') {
    message = error;
  }
  return {
    hasError: true,
    type: '',
    message,
    status: 500
  };
}

/**
 * Handle the http status code
 * @param {Number} status Http status code
 */
function httpStatusError(status) {
  if (status === 401) {
    handleUnauthriozedError();
  }
}

/**
 * Handle the unauthorized error (happens incase of expired id token)
 */
function handleUnauthriozedError() {
  //authClient.logout();
}

/**
 * Constructs a http response error.
 * @param {Object} response The Fetch API response
 */
async function constructHTTPResponseError(response) {
  const result = {
    hasError: true,
    type: '',
    message: '',
    status: 500,
    url: ''
  };

  result.url = response.url;

  if (response.ok) {
    const body = await response.json();
    if (body.error) {
      result.type = body.error.type;
      result.message = body.error.message;
    }
  } else {
    let errorObj = await response.text();
    try {
      errorObj = JSON.parse(errorObj);
      if (isArray(errorObj.errors)) {
        errorObj = errorObj.errors[0];
      }
    } catch (err) {
      errorObj = {};
    }
    result.type = errorObj.title || response.status;
    result.message = errorObj.message || response.statusText;
  }
  result.status = response.status;
  httpStatusError(response.status);
  return result;
}

/**
 * Handles Fetch API response error.
 * @param {Object} responseConfig The response config
 */
export async function handleError(responseConfig) {
  if (responseConfig.error) {
    return constructGenericError(responseConfig.error);
  } else if (responseConfig.response) {
    return await constructHTTPResponseError(responseConfig.response);
  }
}

/**
 * Constructs a certificate error object.
 * @param {String} error The cert error
 */
export function constructCertificateError(error) {
  return {
    hasError: true,
    type: '',
    message: error,
    status: -1
  };
}