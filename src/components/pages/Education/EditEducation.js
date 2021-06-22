import React, {Component} from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


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
    path: '/education/edit',
    active: true
  }
];



class EditEducation extends Component {

  constructor() {
    super();

    this.state = {
      messageVariant: 'danger',
      hasMessage: false,
      messageInfo: '',
    };
  }

  saveHandler = (e) => {


  }

  handleValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Breadcrumbs links={breadcrumbLinks} />
        {  
          this.state.hasMessage ? <Alert variant={this.state.messageVariant}>{this.state.messageInfo}</Alert> : ''
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
                <Form.Control size='sm' type="text" name='syear' placeholder="2021" onChange={this.handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Eduction End Year</Form.Label>
                <Form.Control size='sm' type="text" name='eyear' placeholder="2021" onChange={this.handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Institue Name</Form.Label>
                <Form.Control size='sm' type="text" name='instName' placeholder="Humber College" onChange={this.handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Course Name</Form.Label>
                <Form.Control size='sm' type="text" name='cName' placeholder="ITS" onChange={this.handleValueChange} />
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Button size='sm' onClick={this.saveHandler} variant="success" type="submit" className='float-right'>Save</Button>
            <NavLink exact to='/education' className='btn btn-outline-secondary btn-sm float-left'>Back to Education</NavLink>
          </Card.Footer>
        </Card>
      </div>
    );
  }

};

export default EditEducation;