import React from 'react';
import { useState, useEffect } from 'react';
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
    label: 'Edit Experience',
    path: '/experience/edit',
    active: true
  }
];



const EditExperience = (props) => {

  const history = useHistory();
  const [payload, setPayload] = useState({
  
        syear: '',
        eyear: '',
        cname: '',
        position : '',
        description: ''
  })

   const sendGetRequest = async () => {
    try {

      console.log(payload.id)
      projectServices.detailExperience(props.match.params.id)
        .then(function (response) {
          console.log(response.data)
          setPayload({
            id: response.data._id, syear: response.data.syear, eyear: response.data.eyear, cname: response.data.cname, position: response.data.position, description: response.data.description
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

    projectServices.updateExperience(payload)
      .then(response => {
        console.log(response.data);
        history.push('/experience')
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
      <div className="bodyLayout">
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
                <Form.Control size='sm' type="text" name='syear' placeholder="2021" onChange={handleValueChange} value={payload.syear} />
              </Form.Group>
              <Form.Group>
                <Form.Label>End Year</Form.Label>
                <Form.Control size='sm' type="text" name='eyear' placeholder="2021" onChange={handleValueChange} value={payload.eyear}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Company Name</Form.Label>
                <Form.Control size='sm' type="text" name='cname' placeholder="Humber College" onChange={handleValueChange} value={payload.cname}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Position</Form.Label>
                <Form.Control size='sm' type="text" name='position' placeholder="ITS" onChange={handleValueChange} value={payload.position} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control size='sm' as="textarea" rows="8" name='description' onChange={handleValueChange} value={payload.description}/>
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



export default EditExperience;