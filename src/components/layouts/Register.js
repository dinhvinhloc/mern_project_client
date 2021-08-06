import React, { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import * as authServices from '../../services/authServices';
import { useHistory } from 'react-router-dom';

function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [validationError, setValidationError] = useState('');
  const history = useHistory();


  const handleRegister = function (e) {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
    }


    authServices.register(data).then(res => {
      if (res.status == 200) {
        setIsValid(true);
        history.push('/');
      } else {
        setIsValid(false);
        setValidationError(res.data.message);
      }
    });

  }

  return (
    <Row>
      <Col md={{ span: 4, offset: 4 }} className='mt-5 mb-5'>
        <Card>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/register.jpg'} />
          <Card.Body>
            <Form onSubmit={handleRegister}>

              {isValid == false ? (
                <Form.Group >
                  <Form.Label className="alert alert-danger" >{validationError}</Form.Label>
                </Form.Group>) : ''}
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control size='sm' value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter Your Name" />
                <Form.Text className="text-muted">Please enter your name</Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control size='sm' value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">Please enter your email</Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control size='sm' value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className='clearfix'>
                <Button size='sm' className='btn-block' variant="carrot" type="submit">Register</Button>
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer className="text-muted text-center text-danger">Already have an account? <NavLink exact to='/login' className='text-center'>Sign in here</NavLink></Card.Footer>
        </Card>
      </Col>
    </Row>
  );
}

export default Register;
