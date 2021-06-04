// external dependencies
import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

// internal dependencies
import * as constant from './common/config/constant';
import history from './common/utils/request/history';
/**
 * Component that renders all routes in the application.
 */
export default function AppRoutes() {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    path={constant.EXTERNAL_ROUTES.EXTERNAL_LOGIN}
                    component={<div>Avinash</div>}
                />
            </Switch>
        </Router>
    );
}