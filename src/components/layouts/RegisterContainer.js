import React from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Register from './Register';

function RegisterContainer() {
    return (
        <Container fluid className='register-container'>
            <Route path="/register" component={Register} />
        </Container>
    );
}

export default RegisterContainer;