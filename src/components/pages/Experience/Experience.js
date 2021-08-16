import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPenSquare, FaTrash } from 'react-icons/fa';
import * as projectServices from './../../../services/experienceServices';
import LocalStorageService from './../../../utils/localStorage';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';  

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

  


const Experience = () => {

  const [experienceState, setExperienceState] = useState(
    {
      experiences: [],
      searchKeyword: ''
    }
  )

  const sendGetRequest = async () => {
    try {

      const userInfo = LocalStorageService.getUserInfo();
      const payload = { userId: userInfo.userId };

      projectServices.getAllExperiences(payload)
        .then(function (response) {
          console.log(response.data)
          setExperienceState({
            ...experienceState, experiences: response.data
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
    setExperienceState({ ...experienceState, [e.target.name]: e.target.value });
  };

  
  const onDeleteHandler = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            projectServices.deleteExperience(id).then(response => {
              sendGetRequest();
            })
              .catch((error) => {
                console.log('Delete Experience: ' + error);
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
  <div className="bodyLayout">

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
                    onChange={handleValueChange}
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
                  experienceState.experiences.map((experience, index) =>
                    experience.cname.toLowerCase().includes(experienceState.searchKeyword.toLowerCase()) ?
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{experience.syear}</td>
                        <td>{experience.eyear}</td>
                        <td>{experience.cname}</td>
                        <td>{experience.position}</td>
                        <td>{experience.description}</td>
                        <td className='text-center'>
                          <NavLink exact to={'/experience/edit/' + experience._id} className='mr-3'><FaPenSquare className='text-warning' /></NavLink>
                          <NavLink exact to='#' className='mr-3'><FaTrash className='text-danger' onClick={() => onDeleteHandler(experience._id)} /></NavLink>
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


export default Experience;
