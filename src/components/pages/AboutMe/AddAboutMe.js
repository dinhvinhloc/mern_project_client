import React from 'react';
import {useState} from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import * as aboutmeServices from '../../../services/aboutmeServices';
import { useHistory } from 'react-router-dom';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Aboutme',
    path: '/about-me',
  },
  {
    label: 'New Aboutme',
    path: '/about-me/add',
    active: true
  }
];



const AddAboutMe = () => {

  const history = useHistory();
  const [payload, setPayload] = useState({
    info:''
  })
  
  const [error, setError] = useState(
    {
      messageVariant: 'danger',
      message: '',
    }
  )

  const saveHandler = (e) => {
    
    
    aboutmeServices.addAboutme(payload)
      .then(response => {
        console.log(response.data);
        history.push('/about-me')
      })
      .catch((error) => {
        let errorMessage = [];
        
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
        <Card.Header>New AboutMe</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>About Me</Form.Label>
              <Form.Control size='sm' as="textarea" rows="10" cols="60" name='info' placeholder="Enter aboutme info" onChange={handleValueChange} />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Button size='sm' onClick={saveHandler} variant="success" type="submit" className='float-right'>Save</Button>
          <NavLink exact to='/about-me' className='btn btn-outline-secondary btn-sm float-left'>Back to Aboutme</NavLink>
        </Card.Footer>
      </Card>
    </div>
  );
  

}

export default AddAboutMe;
