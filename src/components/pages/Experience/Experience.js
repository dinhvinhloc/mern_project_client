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
    label: 'Experience',
    path: '/experience',
    active: true
  }
];

  


class Experience extends Component {

  state = {
    Experience: [
      {
        "id": "1",
        "syear": "2020",
        "eyear": "2021",
        "cname": "Infosys",
        "position": "web Developer",
        "description":"Worked as a Webdeveloper",
      },
      {
        "id": "1",
        "syear": "2015",
        "eyear": "2019",
        "cname": "TCS",
        "position": "Project Lead",
        "description":"Worked as a Project Lead",
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
          <Card.Header>Experience</Card.Header>
          <Card.Body>
          <Form className='float-left'>
              <Form.Row className="align-items-center">
                <Col xs="auto">
                  
                  <Form.Control
                    size="sm"
                    className="mb-4"
                    id="inlineFormInput"
                    placeholder="Company Name"
                    name="searchKeyword"
                    onChange={this.handleValueChange}
                  />
                </Col>
                <Col xs="auto">
                  <Button size="sm" type="submit" className="mb-4" variant='info'>Search</Button>
                </Col>
              </Form.Row>
            </Form>
            
            
               <NavLink exact to='/experience/add' className='myButton'>Add Experience</NavLink>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Start Year</th>
                  <th>End Year</th>
                  <th>Company Name</th>
                  <th>Position</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.Experience.map((experience, index) =>
                    experience.cname.toLowerCase().includes(this.state.searchKeyword.toLowerCase()) ?
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{experience.syear}</td>
                        <td>{experience.eyear}</td>
                        <td>{experience.cname}</td>
                        <td>{experience.position}</td>
                        <td>{experience.description}</td>
                        <td className='text-center'>
                          <NavLink exact to={'/experience/edit/' + experience.id} className='mr-3'><FaPenSquare className='text-warning' /></NavLink>
                          <NavLink exact to='#' className='mr-3'><FaTrash className='text-danger' onClick={() => this.onDeleteHandler(experience.id)} /></NavLink>
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

export default Experience;
