import React from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Button, Card, Form, Col, Alert } from 'react-bootstrap';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Awards',
    path: '/award'
  },
  {
    label: 'New Award',
    path: '/award/add',
    active: true
  }
];

const AddAward = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const saveHandler = (e) => {

  }
  return <div>
    <Breadcrumbs links={breadcrumbLinks} />
    <Card
          bg='light'
          text='dark'
        >
        <Card.Header>Add Award or Achievment</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Row>
                <Col>
                  <Form.Label>Award Title:</Form.Label>
                  <Form.Control
                  size='sm' type='text' name='title'
                  placeholder='Enter your award title'
                  onChange={handleChangeTitle} />
                </Col>
                <Col>
                  <Form.Label>Description:</Form.Label>
                  <Form.Control
                  size='sm' type='text' name='description'
                  placeholder='Shortly describe it'
                  onChange={handleChangeDescription} />
                </Col>
                <Col>
                  <Form.Label>Date obtained:</Form.Label>
                  <Form.Control
                  size='sm' type='text' name='date'
                  placeholder='MM/YEAR'
                  onChange={handleChangeDate} />
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
          <NavLink exact to='/award' className='btn btn-sm btn-outline-secondary float-left'>Back to Awards and Achievments Overview
          </NavLink>
        </Card.Footer>
      </Card>
  </div>;
};

export default AddAward;
