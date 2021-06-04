// external dependencies
import { configureStore } from '@reduxjs/toolkit';

// internal dependencies
import reducer from './reducer';
import middleware, { epicMiddleware } from './middleware';
import rootEpic from './epic';

const store = configureStore({
    reducer,
    middleware
});

epicMiddleware.run(rootEpic);

export default store;