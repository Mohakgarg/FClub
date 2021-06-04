/**
 * The default headers to send.
 */
export const DEFAULT_REQUEST_HEADERS = {
    default: {
        'Content-Type': 'application/json'
    },
    image: {
        'Content-Type': ' image/jpg'
    },
    multipart: {
        'Content-Type': 'multipart/form-data'
    },
    mp4: {
        'Content-Type': 'video/mp4'
    }
};

/**
 * Constants for route paths
 */
export const ROUTES = {
    WELCOME: '/',
};

/**
 * API method types
 */
export const API_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
};

export const BASE_PATH = "http://localhost:3001";

/**
 * Constants for API endpoints.
 */
export const API_ENDPOINTS = {
    USERS: `${BASE_PATH}/users`
}