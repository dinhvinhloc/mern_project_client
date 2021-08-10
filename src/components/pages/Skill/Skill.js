import React, {useState, useEffect} from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPenSquare, FaTrash } from 'react-icons/fa';
import * as skillServices from './../../../services/skillServices';
import LocalStorageService from './../../../utils/localStorage';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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

const Skill =  () => { 

  const [skillState, setSkillState] = useState(
    {
      skills: [],
      searchKeyword: ''
    }
  )

  const sendGetRequest = async () => {
    try {

      const userInfo = LocalStorageService.getUserInfo();
      const payload = { userId: userInfo.userId };

      skillServices.getAllSkills(payload)
        .then(function (response) {
          console.log(response.data)
          setSkillState({
            ...skillState, skills: response.data
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
    setSkillState({ ...skillState, [e.target.name]: e.target.value });
  };

  const onDeleteHandler = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            skillServices.deleteSkill(id).then(response => {
              sendGetRequest();
            })
              .catch((error) => {
                console.log('Delete skill: ' + error);
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
        <Card.Header>Skill</Card.Header>
        <Card.Body>
          <Form className='float-left'>
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Control
                  size="sm"
                  className="mb-4"
                  id="inlineFormInput"
                  placeholder="Skill"
                  name="searchKeyword"
                  onChange={handleValueChange}
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
                <th>Proficiency level</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                skillState.skills.map((skill, index) =>
                  skill.name.toLowerCase().includes(skillState.searchKeyword.toLowerCase()) ?
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{skill.name}</td>
                      <td>{skill.proflevel}</td>
                      <td>{skill.description}</td>
                      <td className='text-center'>
                        <NavLink exact to={'/skill/edit/' + skill._id} className='mr-3'><FaPenSquare className='text-warning' /></NavLink>
                        <NavLink exact to='#' className='mr-3'><FaTrash className='text-danger' onClick={() => onDeleteHandler(skill._id)} /></NavLink>
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

export default Skill;
