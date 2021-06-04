// external dependencies
import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

// internal dependencies
import * as constant from './config/constant';
import history from './utils/history';

import Users from '../user/index';


/**
 * Component that renders all routes in the application.
 */
export default function AppRoutes() {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    path={constant.ROUTES.WELCOME}
                    component={Users}
                />
            </Switch>
        </Router>
    );
}