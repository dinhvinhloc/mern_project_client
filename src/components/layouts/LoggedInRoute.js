import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../services/authServices';

const LoggedInRoute = ({ component: Component, ...rest }) => {
    
    return (

        <Route {...rest} render={props => (
            !isLogin() ?
                <Redirect to="/login" />
                : <Component {...props} />
        )} />
    );
};

export default LoggedInRoute;