import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPenSquare, FaTrash } from 'react-icons/fa';
import * as languageServices from './../../../services/languageServices';
import LocalStorageService from './../../../utils/localStorage';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';  


const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Language',
    path: '/language',
    active: true
  }
];

const Language = () => {

  const [languageState, setLanguageState] = useState (
    {
      languages: [],
      searchKeyword: ''
      }


  )

  const sendGetRequest = async () => {
    try {

      const userInfo = LocalStorageService.getUserInfo();
      const payload = { userId: userInfo.userId };

      languageServices.getAllLanguages(payload)
        .then(function (response) {
          console.log(response.data)
          setLanguageState({
            ...languageState, languages: response.data
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
    setLanguageState({...languageState,  [e.target.name]: e.target.value });
  };

  const onDeleteHandler = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            languageServices.deleteLanguage(id).then(response => {
              sendGetRequest();
            })
              .catch((error) => {
                console.log('Delete language: ' + error);
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
        <Card.Header>Languages</Card.Header>
        <Card.Body>
          <Form className='float-left'>
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Label srOnly>Language</Form.Label>
                <Form.Control
                  size="sm"
                  className="mb-4"
                  id="inlineFormInput"
                  placeholder="Language"
                  name="searchKeyword"
                  onChange={handleValueChange}
                />
              </Col>
              <Col xs="auto">
                <Button size="sm" type="submit" className="mb-4" variant='info'>Search</Button>
              </Col>
            </Form.Row>
          </Form>
          {/* <NavLink exact to='/language/add' className='btn btn-sm btn-outline-secondary float-right'>New Language</NavLink> */}
          <NavLink exact to='/language/add' className='myButton'>Add Language</NavLink>
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Language</th>
                <th>Level</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                languageState.languages.map((lang, index) =>
                  lang.language.toLowerCase().includes(languageState.searchKeyword.toLowerCase()) ?
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{lang.language}</td>
                      <td>{lang.level}</td>
                      <td className='text-center'>
                        <NavLink exact to={'/language/edit/' + lang._id} className='mr-3'><FaPenSquare className='text-warning' /></NavLink>
                        <NavLink exact to='#' className='mr-3'><FaTrash className='text-danger' onClick={() => onDeleteHandler(lang._id)} /></NavLink>
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

export default Language;
