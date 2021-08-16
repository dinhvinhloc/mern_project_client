import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPenSquare, FaTrash } from 'react-icons/fa';
import * as hobbyServices from './../../../services/hobbyServices';
import LocalStorageService from './../../../utils/localStorage';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Hobby',
    path: '/hobby',
    active: true
  }
];

const Hobby = () => {
  const [hobbyState, setHobbyState] = useState(
    {
      hobbies: [],
      searchKeyword: ''
    }
  )

  const sendGetRequest = async () => {
    try {

      const userInfo = LocalStorageService.getUserInfo();
      const payload = { userId: userInfo.userId };

      hobbyServices.getAllHobbies(payload)
        .then(function (response) {
          console.log(response.data)
          setHobbyState({
            ...hobbyState, hobbies: response.data
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
    setHobbyState({...hobbyState,  [e.target.name]: e.target.value });
  };

  const onDeleteHandler = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do delete',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            hobbyServices.deleteHobby(id).then(response => {
              sendGetRequest();
            })
              .catch((error) => {
                console.log('Delete hobby: ' + error);
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
        <Card.Header>Hobbies/Interests</Card.Header>
        <Card.Body>
          <Form className='float-left'>
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Label srOnly>Hobby</Form.Label>
                <Form.Control
                  size="sm"
                  className="mb-4"
                  id="inlineFormInput"
                  placeholder="Hobby"
                  name="searchKeyword"
                  onChange={handleValueChange}
                />
              </Col>
              <Col xs="auto">
                  <Button size="sm" type="submit" className="mb-4" variant='info'>Search</Button>
              </Col>
            </Form.Row>
          </Form>
          <NavLink exact to='/hobby/add' className='myButton'>Add Hobby or Interest</NavLink>
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                hobbyState.hobbies.map( (hobby, index) =>
                  hobby.name.toLowerCase().includes(hobbyState.searchKeyword.toLowerCase()) ?
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{hobby.name}</td>
                      <td>{hobby.type}</td>
                      <td>
                        <NavLink exact to={'/hobby/edit/' + hobby._id} className='mr-3'>
                          <FaPenSquare className='text-warning' />
                        </NavLink>
                        <NavLink exact to='#' className='mr-3'>
                          <FaTrash className='text-danger' onClick={() => onDeleteHandler(hobby._id)} />
                        </NavLink>
                      </td>
                    </tr> : ''
                )
              }
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Hobby;
