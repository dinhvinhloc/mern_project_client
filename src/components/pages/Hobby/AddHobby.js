import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Button, Card, Form, Col, Alert } from 'react-bootstrap';

const AddHobby = () => {
  const [typeList, setTypeList] = useState(['Hobby', 'Interest']);
  const [hobbyName, setHobbyName] = useState('');
  const [type, setType] = useState('');

  const handleChangeHobbyName = (e) => {
    setHobbyName(e.target.value);
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const saveHandler = (e) => {

  }

  return <div>
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
                  size='sm' type='text' name='hobbyName'
                  placeholder='Enter your hobby name'
                  onChange={handleChangeHobbyName} />
                </Col>
                <Col>
                  <Form.Label>Type:</Form.Label>
                  <Form.Control
                    as='select'
                    size='sm' name='type'
                    value={type}
                    onChange={handleChangeType} >
                      <option value='' key='-1'>--- Please select type ---</option>
                      {
                        typeList.map((value, index) => (
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

  </div>;
};

export default AddHobby;
