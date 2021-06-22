import React from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Button, Card, Form, Col, Alert } from 'react-bootstrap';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Contact',
    path: '/contact'
  },
  {
    label: 'New Contact',
    path: '/contact/add',
    active: true
  }
];

const AddContact = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [webURL, setWebURL] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeURL = (e) => {
    setWebURL(e.target.value);
  };

  const saveHandler = (e) => {

  }

  return (
    <div>
      <Breadcrumbs links={breadcrumbLinks} />

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
                  onChange={handleChangeEmail} />
                </Col>
                <Col>
                  <Form.Label>Phone:</Form.Label>
                  <Form.Control
                  size='sm' type='text' name='phone'
                  placeholder='Enter your phone'
                  onChange={handleChangePhone} />
                </Col>
                <Col>
                  <Form.Label>Website URL:</Form.Label>
                  <Form.Control
                  size='sm' type='text' name='webURL'
                  placeholder='Enter the link to your personal website'
                  onChange={handleChangeURL} />
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
