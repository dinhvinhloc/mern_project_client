import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const AddContact = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeWebsiteUrl = (e) => {
    setWebsiteUrl(e.target.value);
  };

  return (
    <div>
    <h2>Add Contact details:</h2>
            <Form>
              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  size='sm' type='email' name='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={handleChangeEmail} />
              </Form.Group>

            </Form>

    <form>
      <NavLink exact to='/contact' className='btn btn-sm btn-outline-secondary float-right'>
        Go Back to Contact Overview
      </NavLink>
      <div>

        <label>Phone:</label>
        <input
          type="text"
          placeholder="Enter your phone"
          value={phone}
          onChange={handleChangePhone}
        />

        <label>Website URL:</label>
        <input
          type="text"
          placeholder="Enter your website URL"
          value={websiteUrl}
          onChange={handleChangeWebsiteUrl}
        />
      </div>
    </form>
    </div>
  );
};

export default AddContact;
