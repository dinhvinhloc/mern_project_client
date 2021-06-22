import React from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { FaPenSquare, FaTrash } from 'react-icons/fa';

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
  const [awardList, setAwardlist] = useState([
    {
      "id": "1",
      "title": "title1",
      "description": "Lorem ipsum dolor si amet",
      "date": "date1"
    },
    {
      "id": "2",
      "title": "title2",
      "description": "Lorem ipsum dolor si amet",
      "date": "date2"
    }
  ])

  const onDeleteHandler = (id) => {

  }

  return <div>
    <Breadcrumbs links={breadcrumbLinks} />
    <Card
          bg='light'
          text='dark'
        >
        <Card.Header>Awards and Achievments</Card.Header>
        <Card.Body>
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
                awardList.map((award, index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{award.title}</td>
                    <td>{award.description}</td>
                    <td>{award.date}</td>
                    <td className='text-center'>
                      <NavLink exact to={'/award/edit/' + award.id} className='mr-3'>
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
  </div>;
};

export default Award;
