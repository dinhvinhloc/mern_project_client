import React,{useState} from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


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
    label: 'Edit Skill',
    active: true
  }
];

const EditSkill = () => {

    const [stateName, setState] = useState({
      messageVariant: 'danger',
      hasMessage: false,
      messageInfo: '',
    });
  

  const saveHandler = (e) => {

      
  }

  const handleValueChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

    return (
      <div>
        <Breadcrumbs links={breadcrumbLinks} />
        {  
          stateName.hasMessage ? <Alert variant={stateName.messageVariant}>{stateName.messageInfo}</Alert> : ''
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
                <Form.Control size='sm' type="text" name='name' placeholder="Enter skill name" value={stateName.name} onChange={handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Proficiency Level</Form.Label>
                <Form.Control size='sm' type="text" name='name' placeholder="Enter 1-10" value={stateName.name} onChange={handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control size='sm' as="textarea" rows="8" name='description' value={stateName.description} onChange={handleValueChange} />
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
  

};

export default EditSkill;
