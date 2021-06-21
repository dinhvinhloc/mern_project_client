import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Button, Card, Form, Col, Alert } from 'react-bootstrap';

const AddContact = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  saveHandler = (e) => {

  }

  return (
    <div>
      <Card
          bg='light'
          text='dark'
        >
        <Card.Header>Add Contact details</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Row>
                <Col>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                  size='sm' type='email' name='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={handleChangeEmail} />
                </Col>
                <Col>
                  <Form.Label>Phone:</Form.Label>
                  <Form.Control
                  size='sm' type='text' name='phone'
                  placeholder='Enter your phone'
                  value={phone}
                  onChange={handleChangePhone} />
                </Col>
              </Form.Row>
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Button size='sm' variant='success' className='float-right'
            type='submit'
            onClick={saveHandler}>
              Save
          </Button>
          <NavLink exact to='/contact' className='btn btn-sm btn-outline-secondary float-left'>Back to Contact Overview
          </NavLink>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default AddContact;
