import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../services/authServices';

const LoggedInRoute = ({ component: Component, ...rest }) => {
    
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            !isLogin() ?
                <Redirect to="/login" />
                : <Component {...props} />
        )} />
    );
};

export default LoggedInRoute;