import React from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Login from './Login';

function LoginContainer() {
    return (
        <Container fluid className='login-container'>
            <Route path="/login" component={Login} />
        </Container>
    );
}

export default LoginContainer;