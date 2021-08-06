import React, { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import * as authServices from '../../services/authServices';
import LocalStorageService from '../../utils/localStorage';
import { useHistory } from 'react-router-dom';
function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidCredential, setInvalidCredential] = useState(false);
  const history = useHistory();

  const handleLogin = function (e) {
    e.preventDefault();

    const data = {
      email: email,
      password: password
    };

    authServices.login(data).then(res => {
      if (res.status == 200 && res.data.userEmail != null) {
        const data = res.data;

        LocalStorageService.setUserInfo(data);

        const userInfo = LocalStorageService.getUserInfo();

        setInvalidCredential(false);

        history.push('/');
      } else {
        setInvalidCredential(true);
      }
    });

  }

  return (
    <Row>
      <Col md={{ span: 4, offset: 4 }} className='mt-5 mb-5'>
        <Card>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/login.jpg'} />
          <Card.Body>
            <Form onSubmit={handleLogin}>
              {invalidCredential ? (
                <Form.Group >
                  <Form.Label className="alert alert-danger">Invalid username/password</Form.Label>
                </Form.Group>) : ''}

              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control size='sm' value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">Please enter your email</Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control size='sm' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Form.Group className='clearfix'>
                <Button size='sm' className='btn-block' variant="carrot" type="submit">Login</Button>
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer className="text-muted text-center text-danger">Don't have an account? <NavLink exact to='/register' className='text-center'>Register here</NavLink></Card.Footer>
        </Card>
      </Col>
    </Row>
  );
}

export default Login;
