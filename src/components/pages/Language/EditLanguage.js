import React from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Col, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Levels = ['CLB 4','CLB 5','CLB 6','CLB 7','CLB 8','CLB 9','CLB 10',];

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

class EditLanguage extends React.Component {

  constructor() {
    super();
    this.state = {
      id: '',
      language: '',
      level: '',
      messageVariant: 'success',
      hasMessage: false,
      messageInfo: ''
    };
  }

  componentDidMount() {
    
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
          <Card.Header>Update Language</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Label>Language</Form.Label>
                    <Form.Control onChange={this.handleValueChange} value={this.state.language} name='language' size='sm' type="text" placeholder="Enter language" />
                  </Col>
                  <Col>
                    <Form.Label>level</Form.Label>
                    <Form.Control onChange={this.handleValueChange} value={this.state.level} name='level' size='sm' as="select">
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
            <Button size='sm' onClick={this.saveHandler} variant="success" type="submit" className='float-right'>Save</Button>
            <NavLink exact to='/language' className='btn btn-outline-secondary btn-sm float-left'>Back to Language</NavLink>
          </Card.Footer>
        </Card>
      </div>
    );
  }

}

export default EditLanguage;
