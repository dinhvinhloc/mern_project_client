import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';

const Contact = (props) => {

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');


  return (
  <div>
    <NavLink exact to='/contact/edit/:id' className='btn btn-sm btn-outline-secondary float-right'>
      Edit Contact Details
    </NavLink>
    <Card
          bg='light'
          text='dark'
        >
        <Card.Header>Contact details</Card.Header>
        <Card.Body>
          <Form>

          </Form>
        </Card.Body>
    </Card>

    <h2>Contact details:</h2>
    <label>Email:</label>
    <p>{email}</p>

    <label>Phone:</label>
    <p>{phone}</p>

    <label>Website URL:</label>
    <p>{websiteUrl}</p>


    <Button variant="outline-warning">Warning</Button>{' '}
  </div>);
};

export default Contact;
