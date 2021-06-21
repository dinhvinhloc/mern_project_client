import React, { Component } from 'react';
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
    label: 'Language',
    path: '/language',
    active: true
  }
];

class Language extends Component {

  state = {
    languages: [
      {
        "id": "1",
        "language": "English",
        "level": "CLB7",
      },
      {
        "id": "2",
        "language": "French",
        "level": "CLB5",
      },
    ],
    searchKeyword: ''
  }

  onLoadData() {

  }

  componentDidMount() {
  }

  handleValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onDeleteHandler = (id) => {

  }

  render() {
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
                    onChange={this.handleValueChange}
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
                  this.state.languages.map((lang, index) =>
                    lang.language.toLowerCase().includes(this.state.searchKeyword.toLowerCase()) ?
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{lang.language}</td>
                        <td>{lang.level}</td>
                        <td className='text-center'>
                          <NavLink exact to={'/language/edit/' + lang.id} className='mr-3'><FaPenSquare className='text-warning' /></NavLink>
                          <NavLink exact to='#' className='mr-3'><FaTrash className='text-danger' onClick={() => this.onDeleteHandler(lang._id)} /></NavLink>
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

}

export default Language;
