import React from 'react';
import { useState, useEffect } from 'react';
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
    label: 'Edit Education',
    active: true
  }
];



const EditEducation = (props) => {

  const history = useHistory();

  const [payload, setPayload] = useState({
    id: '',
    syear:'',
    eyear:'',
    iname:'',
    cname:''
  })

  const sendGetRequest = async () => {
    try {

      console.log(payload.id)
      projectServices.detailEducation(props.match.params.id)
        .then(function (response) {
          console.log(response.data)
          setPayload({
            id: response.data._id, syear: response.data.syear, eyear: response.data.eyear, iname: response.data.iname, cname: response.data.cname
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

    projectServices.updateEducation(payload)
      .then(response => {
        console.log(response.data);
        history.push('/education')
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
          <Card.Header>Edit Education</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Eduction Start Year</Form.Label>
                <Form.Control size='sm' type="text" name='syear' placeholder="2021" onChange={handleValueChange}  value={payload.syear}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Eduction End Year</Form.Label>
                <Form.Control size='sm' type="text" name='eyear' placeholder="2021" onChange={handleValueChange} value={payload.eyear}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Institue Name</Form.Label>
                <Form.Control size='sm' type="text" name='iname' placeholder="Humber College" onChange={handleValueChange} value={payload.iname} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Course Name</Form.Label>
                <Form.Control size='sm' type="text" name='cname' placeholder="ITS" onChange={handleValueChange} value={payload.cname}/>
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



export default EditEducation;