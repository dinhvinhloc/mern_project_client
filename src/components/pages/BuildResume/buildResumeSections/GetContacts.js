import React, {useState, useEffect} from 'react';
import { Table, Card } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import * as contactServices from './../../../../services/contactServices';
import LocalStorageService from '../../../../utils/localStorage';
import { MANAGED_TYPES } from '../BuildResume';

function GetContacts( {changeHandler} ) {

  const [contactState, setContactState] = useState(
    {
      contacts: [],
      searchKeyword: ''
    }
  )

  const sendGetRequest = async () => {
    try {

      const userInfo = LocalStorageService.getUserInfo();
      const payload = { userId: userInfo.userId };

      contactServices.getAllContacts(payload)
        .then(function (response) {
          console.log(response.data)
          setContactState({
            ...contactState, contacts: response.data
          });
        })

    } catch (err) {

      console.error(err);
    }
  };

  useEffect(() => {
    sendGetRequest();
  }, []);

  return (
    <div className="bodyLayout">
      <Card
        bg='light'
        text='dark'
      >
        <Card.Header>Contacts</Card.Header>

        <Card.Body>
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website URL</th>
                <th>Include?</th>
              </tr>
            </thead>
            <tbody>
              {
                contactState.contacts.map((contact, index) =>
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{contact.email}</td>
                      <td>{contact.phone}</td>
                      <td>{contact.webURL}</td>
                      <td className='text-center'>
                        <input type='checkbox' onChange={(e) => {
                            changeHandler && changeHandler({type: MANAGED_TYPES.CONTACT, value: contact._id})
                        }}></input>
                      </td>
                    </tr>
                )
              }
            </tbody>
        </Table>
      </Card.Body>
    </Card>
  </div>
  );
}

export default GetContacts;