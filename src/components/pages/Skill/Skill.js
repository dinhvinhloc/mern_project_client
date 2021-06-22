import React, {Component} from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPenSquare, FaTrash } from 'react-icons/fa';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Skill',
    path: '/skill',
    active: true
  }
];

class Skill extends Component {

  state = {
    skills: [
      {
        "id": "1",
        "name": "Communication",
        "profLevel": "7",
        "description": "English Language",
      },
      {
        "id": "2",
        "name": "HTML5",
        "profLevel": "8",
        "description": "Web development",
      },
      {
        "id": "3",
        "name": "CSS3",
        "profLevel": "7",
        "description": "Web development",
      },
      {
        "id": "4",
        "name": "JavaScript",
        "profLevel": "5",
        "description": "Web development",
      },
      {
        "id": "5",
        "name": "Time Management",
        "profLevel": "7",
        "description": "Able to meet deadlines",
      },
    ],
    searchKeyword: ''
  }

  onLoadData() {

  }

  componentDidMount() {
    this.onLoadData();
  }

  handleValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onDeleteHandler = (id) => {

  }

  render(){
  return (<div className="bodyLayout">

<Breadcrumbs links={breadcrumbLinks} />
        <Card
          bg='light'
          text='dark'
        >
          <Card.Header>Skills</Card.Header>
          <Card.Body>
            <Form className='float-left'>
              <Form.Row className="align-items-center">
                <Col xs="auto">
                  {/* <Form.Label srOnly>Skill</Form.Label> */}
                  <Form.Control
                    size="sm"
                    className="mb-4"
                    id="inlineFormInput"
                    placeholder="Skill"
                    name="searchKeyword"
                    onChange={this.handleValueChange}
                  />
                </Col>
                <Col xs="auto">
                  <Button size="sm" type="submit" className="mb-4" variant='info'>Search</Button>
                </Col>
              </Form.Row>
            </Form>
            
               <NavLink exact to='/skill/add' className='myButton'>Add Skill</NavLink>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Proficiency Level</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.skills.map((skill, index) =>
                    skill.name.toLowerCase().includes(this.state.searchKeyword.toLowerCase()) ?
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{skill.name}</td>
                        <td>{skill.profLevel}</td>
                        <td>{skill.description}</td>
                        <td className='text-center'>
                          <NavLink exact to={'/skill/edit/' + skill.id} className='mr-3'><FaPenSquare className='text-warning' /></NavLink>
                          <NavLink exact to='#' className='mr-3'><FaTrash className='text-danger' onClick={() => this.onDeleteHandler(skill.id)} /></NavLink>
                        </td>
                      </tr> : ''
                  )
                }
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        </div>)};
};

export default Skill;
