import React, { useState } from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Col, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import * as hobbyServices from './../../../services/hobbyServices';
import { useHistory } from 'react-router-dom';

const Types = ['Activity', 'Interest', 'Leisure', 'Game'];

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Hobby',
    path: '/hobby'
  },
  {
    label: 'New Hobby',
    path: '/hobby/add',
    active: true
  }
];


const AddHobby = () => {
  const history = useHistory();
  const [payload, setPayload] = useState({
    name: '',
    type: ''
  })


  const [error, setError] = useState(
    {
      messageVariant: 'danger',
      message: '',
    }
  )


  const saveHandler = (e) => {
    hobbyServices.addHobby(payload)
      .then(response => {
        console.log(response.data);
        history.push('/hobby')
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
      <Card.Header>Add Hobby or Interest</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                    size='sm' type='text' name='name'
                    placeholder='Enter your hobby name'
                    onChange={handleValueChange} />
                  </Col>
                  <Col>
                    <Form.Label>Type:</Form.Label>
                    <Form.Control
                      as='select'
                      size='sm' name='type'
                      onChange={handleValueChange} >
                        <option value='' key='-1'>--- Please select type ---</option>
                        {
                          Types.map((value, index) => (
                            <option value={value} key={index}>{value}</option>
                          ))
                        }

                    </Form.Control>
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
            <NavLink exact to='/hobby' className='btn btn-sm btn-outline-secondary float-left'>Back to Hobbies/Interests Overview
            </NavLink>
          </Card.Footer>
      </Card>
    </div>
  );
};

export default AddHobby;
