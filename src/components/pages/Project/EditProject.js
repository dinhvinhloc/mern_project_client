import React from 'react';
import { useState, useEffect } from 'react';
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
    label: 'Edit Project',
    active: true
  }
];


const EditProject = (props) => {
  const history = useHistory();

  const [payload, setPayload] = useState({
    id: '',
    name: '',
    description: ''
  })

  const sendGetRequest = async () => {
    try {

      console.log(payload.id)
      projectServices.detailProject(props.match.params.id)
        .then(function (response) {
          console.log(response.data)
          setPayload({
            id: response.data._id, name: response.data.name, description: response.data.description
          });
        })

    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  useEffect(() => {
    sendGetRequest();
  }, []);



  const [error, setError] = useState(
    {
      messageVariant: 'danger',
      message: '',
    }
  )

  const saveHandler = (e) => {

    projectServices.updateProject(payload)
      .then(response => {
        console.log(response.data);
        history.push('/project')
      })
      .catch((error) => {
        let errorMessage = []
        error.errors.forEach(error => {
          errorMessage.push(error.param + ": " + error.msg)
        })

        setError({
          messageVariant: 'danger',
          message: errorMessage.join(),
        });
      });
  }

  const handleValueChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
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
        <Card.Header>Edit Project</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control size='sm' type="text" name='name' placeholder="Enter project name" value={payload.name} onChange={handleValueChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control size='sm' as="textarea" rows="8" name='description' value={payload.description} onChange={handleValueChange} />
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

export default EditProject;
