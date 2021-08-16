
import React from 'react';
import { useState } from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import * as projectServices from '../../../services/educationServices';
import { useHistory } from 'react-router-dom';


const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Education',
    path: '/education',
  },
  {
    label: 'New Education',
    path: '/education/add',
    active: true
  }
];



const AddEducation = () => {

  const history = useHistory();
  const [payload, setPayload] = useState({
    syear:'',
    eyear:'',
    iname:'',
    cname:''
  })
  
  const [error, setError] = useState(
    {
      messageVariant: 'danger',
      message: '',
    }
  )
  
  const saveHandler = (e) => {
    projectServices.addEducation(payload)
      .then(response => {
        console.log(response.data);
        history.push('/education')
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
      <div className="bodyLayout">
        <Breadcrumbs links={breadcrumbLinks} />
        {  
          error.message ? <Alert variant={error.messageVariant}>{error.message}</Alert> : ''
        }
        <Card
          bg='light'
          text='dark'
        >
          <Card.Header>New Education</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Eduction Start Year</Form.Label>
                <Form.Control size='sm' type="text" name='syear' placeholder="2021" onChange={handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Eduction End Year</Form.Label>
                <Form.Control size='sm' type="text" name='eyear' placeholder="2021" onChange={handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Institue Name</Form.Label>
                <Form.Control size='sm' type="text" name='iname' placeholder="Humber College" onChange={handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Course Name</Form.Label>
                <Form.Control size='sm' type="text" name='cname' placeholder="ITS" onChange={handleValueChange} />
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Button size='sm' onClick={saveHandler} variant="success" type="submit" className='float-right'>Save</Button>
            <NavLink exact to='/education' className='btn btn-outline-secondary btn-sm float-left'>Back to Education</NavLink>
          </Card.Footer>
        </Card>
      </div>
    );
  }



export default AddEducation;