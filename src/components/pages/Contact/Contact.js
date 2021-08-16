import React, {useState, useEffect} from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPenSquare, FaTrash } from 'react-icons/fa';
import * as contactServices from './../../../services/contactServices';
import LocalStorageService from './../../../utils/localStorage';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Contact',
    path: '/contact',
    active: true
  }
];

const Contact = (props) => {

  const [contactState, setContactState] = useState(
    {
      contacts: [],
      searchKeyword: ''
    }
  )

  const sendGetRequest = async () => {
    try {

      const userInfo = LocalStorageService.getUserInfo();
      const payload = { userId: userInfo.userId };

      contactServices.getAllContacts(payload)
        .then(function (response) {
          console.log(response.data)
          setContactState({
            ...contactState, contacts: response.data
          });
        })

    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  useEffect(() => {
    sendGetRequest();
  }, []);


  const handleValueChange = (e) => {
    setContactState({ ...contactState, [e.target.name]: e.target.value });
  };

  const onDeleteHandler = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            contactServices.deleteContact(id).then(response => {
              sendGetRequest();
            })
              .catch((error) => {
                console.log('Delete skill: ' + error);
              });
          }
        },
        {
          label: 'No'
        }
      ]
    });
  }


  return (
    <div>
      <Breadcrumbs links={breadcrumbLinks} />
      <Card
            bg='light'
            text='dark'
          >
          <Card.Header>Contact details</Card.Header>
          <Card.Body>
            <Form className='float-left'>
              <Form.Row className="align-items-center">
                <Col xs="auto">
                  <Form.Control
                    size="sm"
                    className="mb-4"
                    id="inlineFormInput"
                    placeholder="Contact"
                    name="searchKeyword"
                    onChange={handleValueChange}
                  />
                </Col>
                <Col xs="auto">
                  <Button size="sm" type="submit" className="mb-4" variant='info'>Search</Button>
                </Col>
              </Form.Row>
            </Form>
            <NavLink exact to='/contact/add' className='myButton'>Add Contact details</NavLink>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website URL</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  contactState.contacts.map((contact, index) =>
                    contact.email.toLowerCase().includes(contactState.searchKeyword.toLowerCase()) ?
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.webURL}</td>
                        <td className='text-center'>
                          <NavLink exact to={'/contact/edit/' + contact._id} className='mr-3'>
                            <FaPenSquare className='text-warning' />
                          </NavLink>
                          <NavLink exact to='#' className='mr-3'>
                            <FaTrash className='text-danger' onClick={() => onDeleteHandler(contact._id)} />
                          </NavLink>
                        </td>
                      </tr> : ''
                  )
                }
              </tbody>
            </Table>
          </Card.Body>
      </Card>
    </div>);
};

export default Contact;
