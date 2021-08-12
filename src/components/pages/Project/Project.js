import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPenSquare, FaTrash } from 'react-icons/fa';
import * as projectServices from './../../../services/projectServices';
import LocalStorageService from './../../../utils/localStorage';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';  

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
      projects: [],
      searchKeyword: ''
    }
  )

  const sendGetRequest = async () => {
    try {

      const userInfo = LocalStorageService.getUserInfo();
      const payload = { userId: userInfo.userId };

      projectServices.getAllProjects(payload)
        .then(function (response) {
          console.log(response.data)
          setProjectState({
            ...projectState, projects: response.data
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


  const handleValueChange = (e) => {
    setProjectState({ ...projectState, [e.target.name]: e.target.value });
  };

  const onDeleteHandler = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            projectServices.deleteProject(id).then(response => {
              sendGetRequest();
            })
              .catch((error) => {
                console.log('Delete project: ' + error);
              });
          }
        },
        {
          label: 'No'
        }
      ]
    });
  }
  return (
    <div>
      <Breadcrumbs links={breadcrumbLinks} />
      <Card
        bg='light'
        text='dark'
      >
        <Card.Header>Projects</Card.Header>
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
                        <NavLink exact to={'/project/edit/' + project._id} className='mr-3'><FaPenSquare className='text-warning' /></NavLink>
                        <NavLink exact to='#' className='mr-3'><FaTrash className='text-danger' onClick={() => onDeleteHandler(project._id)} /></NavLink>
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
