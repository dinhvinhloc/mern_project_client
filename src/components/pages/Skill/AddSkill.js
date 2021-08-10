import React from 'react';
import {useState} from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import * as skillServices from '../../../services/skillServices';
import { useHistory } from 'react-router-dom';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Skill',
    path: '/skill',
  },
  {
    label: 'New Skill',
    path: '/skill/add',
    active: true
  }
];



const AddSkill = () => {

  const history = useHistory();
  const [payload, setPayload] = useState({
    name:'',
    proflevel:0,
    description:''
  })
  
  const [error, setError] = useState(
    {
      messageVariant: 'danger',
      message: '',
    }
  )

  const saveHandler = (e) => {
    
    
    skillServices.addSkill(payload)
      .then(response => {
        console.log(response.data);
        history.push('/skill')
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
        <Card.Header>New Skill</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control size='sm' type="text" name='name' placeholder="Enter skill name" onChange={handleValueChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Proflevel</Form.Label>
              <Form.Control size='sm' type="number" min="1" max="10" name='proflevel' placeholder="Enter 1-10" onChange={handleValueChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control size='sm' as="textarea" rows="8" name='description' onChange={handleValueChange} />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Button size='sm' onClick={saveHandler} variant="success" type="submit" className='float-right'>Save</Button>
          <NavLink exact to='/skill' className='btn btn-outline-secondary btn-sm float-left'>Back to Skill</NavLink>
        </Card.Footer>
      </Card>
    </div>
  );
  

}

export default AddSkill;
