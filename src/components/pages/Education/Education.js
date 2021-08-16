import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPenSquare, FaTrash } from 'react-icons/fa';
import * as educationServices from './../../../services/educationServices';
import LocalStorageService from './../../../utils/localStorage';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';  

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

  


const Education = () => {

  const [educationState, setEducationState] = useState(
    {
      educations: [],
      searchKeyword: ''
    }
  )

  const sendGetRequest = async () => {
    try {

      const userInfo = LocalStorageService.getUserInfo();
      const payload = { userId: userInfo.userId };

      educationServices.getAllEducations(payload)
        .then(function (response) {
          console.log(response.data)
          setEducationState({
            ...educationState, educations: response.data
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
    setEducationState({ ...educationState, [e.target.name]: e.target.value });
  };

  const onDeleteHandler = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            educationServices.deleteEducation(id).then(response => {
              sendGetRequest();
            })
              .catch((error) => {
                console.log('Delete Education: ' + error);
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
                    onChange={handleValueChange}
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
                  educationState.educations.map((education, index) =>
                    education.cname.toLowerCase().includes(educationState.searchKeyword.toLowerCase()) ?
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{education.syear}</td>
                        <td>{education.eyear}</td>
                        <td>{education.iname}</td>
                        <td>{education.cname}</td>
                        <td className='text-center'>
                          <NavLink exact to={'/education/edit/' + education._id} className='mr-3'><FaPenSquare className='text-warning' /></NavLink>
                          <NavLink exact to='#' className='mr-3'><FaTrash className='text-danger' onClick={() => onDeleteHandler(education._id)} /></NavLink>
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


export default Education;
