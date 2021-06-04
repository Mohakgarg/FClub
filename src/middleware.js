
// external dependencies
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';

// internal dependencies
import { ajax$ } from './common/utils/request/api';
import history from './common/utils/history';

export const epicMiddleware = createEpicMiddleware({
    dependencies: {
        ajax$: ajax$,
        history: history,
    }
});

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: false,
        thunk: false
    }),
    epicMiddleware,
];

export default middleware;
