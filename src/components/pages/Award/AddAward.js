import React from 'react';
import { useState } from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Col, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import * as awardServices from './../../../services/awardServices';
import { useHistory } from 'react-router-dom';

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

  const history = useHistory();
  const [payload, setPayload] = useState({
    title: '',
    description: '',
    date: ''
  })
  const [error, setError] = useState(
    {
      messageVariant: 'danger',
      message: '',
    }
  )

  const saveHandler = (e) => {


    awardServices.addAward(payload)
      .then(response => {
        console.log(response.data);
        history.push('/award')
      })
      .catch((error) => {
        let errorMessage = []
        error.errors.forEach(error =>{
          errorMessage.push(error.param + ": " + error.msg)
        })

        setError({
          messageVariant: 'danger',
          message: errorMessage.join(),
        });
      });
  }

  const handleValueChange = (e) => {
    setPayload({...payload, [e.target.name]: e.target.value });
  };

  return (
    <div>
        <Breadcrumbs links={breadcrumbLinks} />
        {
          error.message ? <Alert variant={error.messageVariant}>{error.message}</Alert> : ''
        }
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
                    onChange={handleValueChange} />
                  </Col>
                  <Col>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                    size='sm' type='text' name='description'
                    placeholder='Shortly describe it'
                    onChange={handleValueChange} />
                  </Col>
                  <Col>
                    <Form.Label>Date obtained:</Form.Label>
                    <Form.Control
                    size='sm' type='text' name='date'
                    placeholder='MM/YEAR'
                    onChange={handleValueChange} />
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
    </div>
  );
};

export default AddAward;
