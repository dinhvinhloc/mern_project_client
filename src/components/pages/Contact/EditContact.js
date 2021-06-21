import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Button, Card, Form, Col, Alert } from 'react-bootstrap';

const EditContact = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div>
      <Card
        bg='light'
        text='dark'
      >
        <Card.Header>Edit Contact details</Card.Header>

      </Card>


<form>
      <NavLink exact to='/contact' className='btn btn-sm btn-outline-secondary float-right'>
        Go Back to Contact Overview
      </NavLink>
      <div>
        <h2>Edit Contact details:</h2>

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChangeEmail}
        />

        <label>Phone:</label>
        <input
          type="text"
          placeholder="Enter your phone"
          value={phone}
          onChange={handleChangePhone}
        />

      </div>
    </form>

    </div>

  );
};

export default EditContact;
