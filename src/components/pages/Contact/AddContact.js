import React from 'react';
import { useState } from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Col, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import * as contactServices from './../../../services/contactServices';
import { useHistory } from 'react-router-dom';

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

  const history = useHistory();
  const [payload, setPayload] = useState({
    email: '',
    phone: '',
    webURL: ''
  })

  const [error, setError] = useState(
    {
      messageVariant: 'danger',
      message: '',
    }
  )

  const saveHandler = (e) => {


    contactServices.addContact(payload)
      .then(response => {
        console.log(response.data);
        history.push('/contact')
      })
      .catch((error) => {
        let errorMessage = []
        error.errors.forEach(error =>{
          errorMessage.push(error.param + ": " + error.msg)
        })

        setError({
          messageVariant: 'danger',
          message: errorMessage.join(),
        });
      });
  }

  const handleValueChange = (e) => {
    setPayload({...payload, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Breadcrumbs links={breadcrumbLinks} />
      {
        error.message ? <Alert variant={error.messageVariant}>{error.message}</Alert> : ''
      }
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
                  onChange={handleValueChange} />
                </Col>
                <Col>
                  <Form.Label>Phone:</Form.Label>
                  <Form.Control
                  size='sm' type='text' name='phone'
                  placeholder='Enter your phone'
                  onChange={handleValueChange} />
                </Col>
                <Col>
                  <Form.Label>Website URL:</Form.Label>
                  <Form.Control
                  size='sm' type='text' name='webURL'
                  placeholder='Enter the link to your personal website'
                  onChange={handleValueChange} />
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
