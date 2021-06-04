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
    PROFILE_SELECTOR: '/profiles',
    LANGUAGE_SELECTOR: '/language',
    PHONE_NUMBER: '/phone-number',
    EDUCATION_SELECTOR: '/education',
    JOB_LOCATION_SELECTOR: '/job-location',
    SKILL_INDUSTRY_SELECTOR: '/skill-industry',
    JOBS: '/job',
    APPLICATION: '/application',
    APPLICATION_DETAILS: '/application/:applicationId/job/:jobId',
    JOB_PROFILE: '/job-profile/:jobId',
    JOB_SEARCH: '/jobs-search',
    NEW_MATCHING_JOBS: '/new-matching-jobs',
    APPLICATION_FORM: '/application-form/:jobId',
    APPLICATION_SUBMISSION: '/application-submission/:jobId',
    USER_PROFILE: '/user-profile',
    USER_EDUCATION: '/user-education',
    USER_LANGUAGE: '/user-language',
    USER_VIDEO: '/user-video',
    USER_JOB_LOCATION: '/user-job-location',
    USER_PERSONAL_DETAILS: '/user-personal-detail',
    USER_SKILLS: '/user-skill',
    USER_SUB_SKILLS: '/user-skill/:id/sub-skill',
    USER_ADD_NEW_SKILLS: '/user-skill/create',
    USER_INDUSTRIES: '/user-industry',
    USER_PRIVACY_POLICY: '/privacy-policy',
    USER_TERMS_OF_SERVICE: '/terms-of-service',
    ABOUT: '/about',
    FAQ: '/faq',
    UNNATI_DETAILS: '/unnati-details',
    DEVICE_COMPATIBLE: '/device-compatible',
    ADD_PROFILE_EDUCATION: '/add-profile-education',
    ADD_PROFILE_JOB_LOCATION: '/add-profile-job-location',
    ADD_PROFILE_SKILL_INDUSTRY_SELECTOR: '/add-profile-skill-industry',
    DELETE_PROFILE: '/delete-profile',
    STATE_JOB_PORTAL: '/state-job-portal'
};