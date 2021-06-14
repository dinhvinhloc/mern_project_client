import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const LoggedInRoute = ({ component: Component, ...rest }) => {
    
    // Later function to set this correctly for login
    let isLogin = true;
    
    return (
        <Route {...rest} render={props => (
            !isLogin ?
                <Redirect to="/login" />
                : <Component {...props} />
        )} />
    );
};

export default LoggedInRoute;