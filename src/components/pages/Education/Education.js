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
    label: 'Education',
    path: '/education',
    active: true
  }
];

  


class Education extends Component {

  state = {
    Education: [
      {
        "id": "1",
        "syear": "2020",
        "eyear": "2021",
        "iname": "Humber College",
        "cname": "Information Technology Solutions",
      },
      {
        "id": "2",
        "syear": "2015",
        "eyear": "2019",
        "iname": "Laxmi Institute of Technology",
        "cname": "Computer Science Engineering",
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
          <Card.Header>Education</Card.Header>
          <Card.Body>
          <Form className='float-left'>
              <Form.Row className="align-items-center">
                <Col xs="auto">
                  {/* <Form.Label srOnly>Skill</Form.Label> */}
                  <Form.Control
                    size="sm"
                    className="mb-4"
                    id="inlineFormInput"
                    placeholder="Course Name"
                    name="searchKeyword"
                    onChange={this.handleValueChange}
                  />
                </Col>
                <Col xs="auto">
                  <Button size="sm" type="submit" className="mb-4" variant='info'>Search</Button>
                </Col>
              </Form.Row>
            </Form>
            
            
               <NavLink exact to='/education/add' className='myButton'>Add Education</NavLink>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Start Year</th>
                  <th>End Year</th>
                  <th>Institute Name</th>
                  <th>Course Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.Education.map((education, index) =>
                    education.cname.toLowerCase().includes(this.state.searchKeyword.toLowerCase()) ?
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{education.syear}</td>
                        <td>{education.eyear}</td>
                        <td>{education.iname}</td>
                        <td>{education.cname}</td>
                        <td className='text-center'>
                          <NavLink exact to={'/education/edit/' + education.id} className='mr-3'><FaPenSquare className='text-warning' /></NavLink>
                          <NavLink exact to='#' className='mr-3'><FaTrash className='text-danger' onClick={() => this.onDeleteHandler(education.id)} /></NavLink>
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

export default Education;
