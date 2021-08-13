import React, {useState, useEffect} from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPenSquare, FaTrash } from 'react-icons/fa';
import * as aboutmeServices from './../../../services/aboutmeServices';
import LocalStorageService from './../../../utils/localStorage';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Aboutme',
    path: '/about-me',
    active: true
  }
];

const AboutMe = () => {

  const [aboutmeState, setAboutmeState] = useState(
    {
      aboutme: [],
      searchKeyword: ''
    }
  )

  const sendGetRequest = async () => {
    try {

      const userInfo = LocalStorageService.getUserInfo();
      const payload = { userId: userInfo.userId };

      aboutmeServices.getAllAboutme(payload)
        .then(function (response) {
          console.log(response.data)
          setAboutmeState({
            ...aboutmeState, aboutme: response.data
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
    setAboutmeState({ ...aboutmeState, [e.target.name]: e.target.value });
  };

  const onDeleteHandler = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            aboutmeServices.deleteAboutme(id).then(response => {
              sendGetRequest();
            })
              .catch((error) => {
                console.log('Delete aboutme: ' + error);
              });
          }
        },
        {
          label: 'No'
        }
      ]
    });
  }

  return <div className="bodyLayout">
    <Breadcrumbs links={breadcrumbLinks} />
    <Card
        bg='light'
        text='dark'
      >
      <Card.Header>About Me</Card.Header>
      <Card.Body>
          <NavLink exact to='/about-me/add' className='myButton'>Add Aboutme</NavLink>
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Aboutme Info</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                aboutmeState.aboutme.map((aboutme, index) =>
                  
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{aboutme.info}</td>
                      <td className='text-center'>
                        <NavLink exact to={'/about-me/edit/' + aboutme._id} className='mr-3'><FaPenSquare className='text-warning' /></NavLink>
                        <NavLink exact to='#' className='mr-3'><FaTrash className='text-danger' onClick={() => onDeleteHandler(aboutme._id)} /></NavLink>
                      </td>
                    </tr>
                )
              }
            </tbody>
          </Table>
        </Card.Body>
        </Card>
      </div>
}

export default AboutMe;
