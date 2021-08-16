import React, {useState, useEffect} from 'react';
import { Table, Card } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import * as hobbyServices from './../../../../services/hobbyServices';
import LocalStorageService from '../../../../utils/localStorage';
import { MANAGED_TYPES } from '../BuildResume';

function GetHobbies( {changeHandler} ) {

  const [hobbyState, setHobbyState] = useState(
    {
      hobbies: [],
      searchKeyword: ''
    }
  )

  const sendGetRequest = async () => {
    try {

      const userInfo = LocalStorageService.getUserInfo();
      const payload = { userId: userInfo.userId };

      hobbyServices.getAllHobbies(payload)
        .then(function (response) {
          console.log(response.data)
          setHobbyState({
            ...hobbyState, hobbies: response.data
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
        <Card.Header>Hobbies</Card.Header>

        <Card.Body>
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
                <th>Include?</th>
              </tr>
            </thead>
            <tbody>
              {
                hobbyState.hobbies.map((hobby, index) =>
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{hobby.name}</td>
                      <td>{hobby.type}</td>
                      <td className='text-center'>
                        <input type='checkbox' onChange={(e) => {
                            changeHandler && changeHandler({type: MANAGED_TYPES.HOBBY, value: hobby._id})
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

export default GetHobbies;