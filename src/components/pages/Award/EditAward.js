import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Button, Card, Form, Col, Alert } from 'react-bootstrap';

const EditAward = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const saveHandler = (e) => {

  }

  return <div>
  <Card
    bg='light'
    text='dark'
  >
    <Card.Header>Edit Award or Achievment details</Card.Header>
    <Card.Body>
      <Form>
        <Form.Group>
          <Form.Row>
            <Col>
              <Form.Label>Award Title:</Form.Label>
              <Form.Control
              size='sm' type='email' name='title'
              placeholder='Enter your award title'
              value={title}
              onChange={handleChangeTitle} />
            </Col>
            <Col>
              <Form.Label>Date obtained:</Form.Label>
              <Form.Control
              size='sm' type='text' name='date'
              placeholder='MM/YEAR'
              value={date}
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
  </Card></div>;
};

export default EditAward;
