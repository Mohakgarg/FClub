// external dependencies
import { configureStore } from '@reduxjs/toolkit';

// internal dependencies
import reducer from 'app/reducer';
import middleware, { epicMiddleware } from './middleware';
import rootEpic from 'app/epic';

const store = configureStore({
    reducer,
    middleware
});

epicMiddleware.run(rootEpic);

export default store;