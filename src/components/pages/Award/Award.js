import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPenSquare, FaTrash } from 'react-icons/fa';
import * as awardServices from './../../../services/awardServices';
import LocalStorageService from './../../../utils/localStorage';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Awards',
    path: '/award',
    active: true
  }
];


const Award = () => {

  const [awardState, setAwardState] = useState(
    {
      awards: [],
      searchKeyword: ''
    }
  )

  const sendGetRequest = async () => {
    try {

      const userInfo = LocalStorageService.getUserInfo();
      const payload = { userId: userInfo.userId };

      awardServices.getAllAwards(payload)
        .then(function (response) {
          console.log(response.data)
          setAwardState({
            ...awardState, awards: response.data
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
    setAwardState({ ...awardState, [e.target.name]: e.target.value });
  };

  const onDeleteHandler = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to delete this',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            awardServices.deleteAward(id).then(response => {
              sendGetRequest();
            })
              .catch((error) => {
                console.log('Delete award: ' + error);
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
        <Card.Header>Awards and Achievments</Card.Header>
        <Card.Body>
          <Form className='float-left'>
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Label srOnly>Award</Form.Label>
                <Form.Control
                  size="sm"
                  className="mb-4"
                  id="inlineFormInput"
                  placeholder="Award"
                  name="searchKeyword"
                  onChange={handleValueChange}
                />
              </Col>
              <Col xs="auto">
                <Button size="sm" type="submit" className="mb-4" variant='info'>Search</Button>
              </Col>
            </Form.Row>
          </Form>
          <NavLink exact to='/award/add' className='myButton'>Add Award or Achievment</NavLink>
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                awardState.awards.map((award, index) =>
                  award.name.toLowerCase().includes
                  (awardState.searchKeyword.toLowerCase()) ?
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{award.title}</td>
                    <td>{award.description}</td>
                    <td>{award.date}</td>
                    <td className='text-center'>
                      <NavLink exact to={'/award/edit/' + award._id} className='mr-3'>
                        <FaPenSquare className='text-warning' />
                      </NavLink>
                      <NavLink exact to='#' className='mr-3'>
                        <FaTrash className='text-danger' onClick={()=>onDeleteHandler(award._id)} />
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

export default Award;
