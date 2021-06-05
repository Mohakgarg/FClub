// external dependencies
import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

// internal dependencies
import * as constant from './config/constant';
import history from './utils/history';

import UsersList from '../user/index';
import AddUser from '../user/components/AddUser';


/**
 * Component that renders all routes in the application.
 */
export default function AppRoutes() {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    exact
                    path={constant.ROUTES.USER_LIST}
                    component={UsersList}
                />
                <Route
                    exact
                    path={constant.ROUTES.USER_ADD}
                    component={AddUser}
                />
            </Switch>
        </Router>
    );
}