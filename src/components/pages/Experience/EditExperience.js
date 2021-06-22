
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
    label: 'Experience',
    path: '/experience',
  },
  {
    label: 'edit Experience',
    path: '/experience/edit',
    active: true
  }
];



class EditExperience extends Component {

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
          <Card.Header>New Experience</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Start Year</Form.Label>
                <Form.Control size='sm' type="text" name='syear' placeholder="2021" onChange={this.handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>End Year</Form.Label>
                <Form.Control size='sm' type="text" name='eyear' placeholder="2021" onChange={this.handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Company Name</Form.Label>
                <Form.Control size='sm' type="text" name='compName' placeholder="Humber College" onChange={this.handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Position</Form.Label>
                <Form.Control size='sm' type="text" name='position' placeholder="ITS" onChange={this.handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control size='sm' as="textarea" rows="8" name='description' onChange={this.handleValueChange} />
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Button size='sm' onClick={this.saveHandler} variant="success" type="submit" className='float-right'>Save</Button>
            <NavLink exact to='/experience' className='btn btn-outline-secondary btn-sm float-left'>Back to Experience</NavLink>
          </Card.Footer>
        </Card>
      </div>
    );
  }

};

export default EditExperience;