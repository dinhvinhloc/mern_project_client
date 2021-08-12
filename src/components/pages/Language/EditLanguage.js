import React from 'react';
import { useState, useEffect } from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Col, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import * as languageServices from '../../../services/languageServices';
import { useHistory } from 'react-router-dom';

const Levels = ['CLB 4','CLB 5','CLB 6','CLB 7','CLB 8','CLB 9','CLB 10','N1','N2','N3','N4','N5'];

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Language',
    path: '/language',
  },
  {
    label: 'Update language',
    active: true
  }
];

const EditLanguage = (props) => {
  const history = useHistory();

  const [payload, setPayload] = useState({
    id: '',
    language: '',
    level: ''
  })
  const [error, setError] = useState(
    {
      messageVariant: 'danger',
      message: '',
    }
  )

  const sendGetRequest = async () => {
    try {

      console.log(payload.id)
      languageServices.detailLanguage(props.match.params.id)
        .then(function (response) {
          console.log(response.data)
          setPayload({
            id: response.data._id, language: response.data.language, level: response.data.level
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

  const saveHandler = (e) => {

    languageServices.updateLanguage(payload)
      .then(response => {
        console.log(response.data);
        history.push('/language')
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
        <Card.Header>Update Language</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Row>
                <Col>
                  <Form.Label>Language</Form.Label>
                  <Form.Control onChange={handleValueChange} value={payload.language} name='language' size='sm' type="text" placeholder="Enter language" />
                </Col>
                <Col>
                  <Form.Label>level</Form.Label>
                  <Form.Control onChange={handleValueChange} value={payload.level} name='level' size='sm' as="select">
                    <option value='' key='-1'>--- Please select level ---</option>
                    {
                      Levels.map((value, index) => (
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
          <Button size='sm' onClick={saveHandler} variant="success" type="submit" className='float-right'>Save</Button>
          <NavLink exact to='/language' className='btn btn-outline-secondary btn-sm float-left'>Back to Language</NavLink>
        </Card.Footer>
      </Card>
    </div>
  );


}



export default EditLanguage;
