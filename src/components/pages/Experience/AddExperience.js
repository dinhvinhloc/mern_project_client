import React from 'react';
import { useState } from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import * as projectServices from '../../../services/experienceServices';
import { useHistory } from 'react-router-dom';


const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Experience',
    path: '/experience',
  },
  {
    label: 'New Experience',
    path: '/experience/add',
    active: true
  }
];



const AddExperience = () => {

  const history = useHistory();
  const [payload, setPayload] = useState({
  
        syear: '',
        eyear: '',
        cname: '',
        position : '',
        description: ''
  })


   const [error, setError] = useState(
    {
      messageVariant: 'danger',
      message: '',
    }
  )

  const saveHandler = (e) => {
    projectServices.addExperience(payload)
      .then(response => {
        console.log(response.data);
        history.push('/experience')
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
          <Card.Header>New Experience</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Start Year</Form.Label>
                <Form.Control size='sm' type="text" name='syear' placeholder="2021" onChange={handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>End Year</Form.Label>
                <Form.Control size='sm' type="text" name='eyear' placeholder="2021" onChange={handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Company Name</Form.Label>
                <Form.Control size='sm' type="text" name='cname' placeholder="TCS" onChange={handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Position</Form.Label>
                <Form.Control size='sm' type="text" name='position' placeholder="Web Developer" onChange={handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control size='sm' as="textarea" rows="8" name='description' onChange={handleValueChange} />
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Button size='sm' onClick={saveHandler} variant="success" type="submit" className='float-right'>Save</Button>
            <NavLink exact to='/experience' className='btn btn-outline-secondary btn-sm float-left'>Back to Experience</NavLink>
          </Card.Footer>
        </Card>
      </div>
    );
  }



export default AddExperience;