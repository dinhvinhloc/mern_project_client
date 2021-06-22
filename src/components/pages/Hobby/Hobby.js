import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { FaPenSquare, FaTrash } from 'react-icons/fa';

const Hobby = () => {
  const [hobbyList, setHobbylist] = useState([
    {
      "id": "1",
      "name": "Soccer",
      "type": "hobby"
    },
    {
      "id": "2",
      "name": "Stocks",
      "type": "interest"
    }
  ])

  const onDeleteHandler = (id) => {

  }

  return <div>
    <Card
        bg='light'
        text='dark'
      >
      <Card.Header>Hobbies/Interests</Card.Header>
      <Card.Body>
        <NavLink exact to='/hobby/add' className='myButton'>Add Hobby or Interest</NavLink>
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
              <th>Actions URL</th>
            </tr>
          </thead>
          <tbody>
            {
              hobbyList.map( (hobby, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{hobby.name}</td>
                  <td>{hobby.type}</td>
                  <td>
                    <NavLink exact to={'/hobby/edit/' + hobby.id} className='mr-3'>
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

export default Hobby;
