// external dependencies
import React from 'react';
import { Provider } from 'react-redux';

// internal dependencies
import AppRoutes from './AppRoutes';
import store from './store';

/**
 * The entry component of the application. This component is responsible
 * for rendering global styles and configures routes.
 */
export default function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}
