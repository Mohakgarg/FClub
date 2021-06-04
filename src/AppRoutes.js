// external dependencies
import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

// internal dependencies
import * as constant from './common/config/constant';
import history from './common/utils/history';
/**
 * Component that renders all routes in the application.
 */

const Demo = () => {
    return <div>Avinash</div>;
};

export default function AppRoutes() {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    path={constant.ROUTES.ABOUT}
                    component={Demo}
                />
            </Switch>
        </Router>
    );
}