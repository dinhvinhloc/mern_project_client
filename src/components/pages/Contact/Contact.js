import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { FaPenSquare, FaTrash } from 'react-icons/fa';

const Contact = (props) => {
  const [contactList, setContactList] = useState([
    {
      "id": "1",
      "email": "abc@zxc.ca",
      "phone": "12345678"
    },
    {
      "id": "2",
      "email": "abc2@zxc.ca",
      "phone": "12345678(2)"
    },
  ])

  const onDeleteHandler = (id) => {

  }

  return (
  <div>
    <Card
          bg='light'
          text='dark'
        >
        <Card.Header>Contact details</Card.Header>
        <Card.Body>
          <NavLink exact to='/contact/add' className='myButton'>Add Contact details</NavLink>
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions URL</th>
              </tr>
            </thead>
            <tbody>
              {
                contactList.map((contact, index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td className='text-center'>
                      <NavLink exact to={'/contact/edit/' + contact.id} className='mr-3'>
                        <FaPenSquare className='text-warning' />
                      </NavLink>
                      <NavLink exact to='#' className='mr-3'>
                        <FaTrash className='text-danger' onClick={onDeleteHandler} />
                      </NavLink>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Card.Body>
    </Card>
  </div>);
};

export default Contact;
