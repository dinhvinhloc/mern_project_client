import React from 'react';
import { useState } from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import * as projectServices from '../../../services/projectServices';
import { useHistory } from 'react-router-dom';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Project',
    path: '/project',
  },
  {
    label: 'New Project',
    path: '/project/add',
    active: true
  }
];

const AddProject = () => {
  
  const history = useHistory();
  const [payload, setPayload] = useState({
    name:'',
    description:''
  })
  
  const [error, setError] = useState(
    {
      messageVariant: 'danger',
      message: '',
    }
  )

  const saveHandler = (e) => {
    
    
    projectServices.addProject(payload)
      .then(response => {
        console.log(response.data);
        history.push('/project')
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
        <Card.Header>New Project</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control size='sm' type="text" name='name' placeholder="Enter project name" onChange={handleValueChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control size='sm' as="textarea" rows="8" name='description' onChange={handleValueChange} />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Button size='sm' onClick={saveHandler} variant="success" type="submit" className='float-right'>Save</Button>
          <NavLink exact to='/project' className='btn btn-outline-secondary btn-sm float-left'>Back to Project</NavLink>
        </Card.Footer>
      </Card>
    </div>
  );

}

export default AddProject;
