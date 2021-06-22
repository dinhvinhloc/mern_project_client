import React, { useState } from 'react';
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
    label: 'Project',
    path: '/project',
    active: true
  }
];


const Project = () => {

  const [projectState, setProjectState] = useState(
    {
      projects: [
        {
          "id": "1",
          "name": "Java",
          "description": "Java developer",
        },
        {
          "id": "2",
          "name": "C#",
          "description": "C# developer",
        },
        {
          "id": "3",
          "name": "Python",
          "description": "Python developer",
        },
        {
          "id": "4",
          "name": ".Net",
          "description": ".Net developer",
        },
        {
          "id": "5",
          "name": "GoLang",
          "description": "GoLang developer",
        },
      ],
      searchKeyword: ''
    }
  )

  const onLoadData = () => {

  }

  const  componentDidMount = () =>  {
    onLoadData();
  }

  const handleValueChange = (e) => {
    setProjectState({...projectState, [e.target.name]: e.target.value });
  };

  const onDeleteHandler = (id) => {

  }
  return (
    <div>
      <Breadcrumbs links={breadcrumbLinks} />
      <Card
        bg='light'
        text='dark'
      >
        <Card.Header>Project</Card.Header>
        <Card.Body>
          <Form className='float-left'>
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Label srOnly>Project</Form.Label>
                <Form.Control
                  size="sm"
                  className="mb-4"
                  id="inlineFormInput"
                  placeholder="Project"
                  name="searchKeyword"
                  onChange={handleValueChange}
                />
              </Col>
              <Col xs="auto">
                <Button size="sm" type="submit" className="mb-4" variant='info'>Search</Button>
              </Col>
            </Form.Row>
          </Form>
          {/* <NavLink exact to='/project/add' className='btn btn-sm btn-outline-secondary float-right'>New Project</NavLink> */}
          <NavLink exact to='/project/add' className='myButton'>Add Project</NavLink>
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                projectState.projects.map((project, index) =>
                  project.name.toLowerCase().includes(projectState.searchKeyword.toLowerCase()) ?
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{project.name}</td>
                      <td>{project.description}</td>
                      <td className='text-center'>
                        <NavLink exact to={'/project/edit/' + project.id} className='mr-3'><FaPenSquare className='text-warning' /></NavLink>
                        <NavLink exact to='#' className='mr-3'><FaTrash className='text-danger' onClick={() => onDeleteHandler(project.id)} /></NavLink>
                      </td>
                    </tr> : ''
                )
              }
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );

}

export default Project;
