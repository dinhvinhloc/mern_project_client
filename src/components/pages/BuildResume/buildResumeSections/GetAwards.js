import React, {useState, useEffect} from 'react';
import { Table, Card } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import * as awardServices from './../../../../services/awardServices';
import LocalStorageService from '../../../../utils/localStorage';
import { MANAGED_TYPES } from '../BuildResume';


function GetAwards({changeHandler}) {

  const [awardState, setAwardState] = useState(
    {
      awards: [],
      searchKeyword: ''
    }
  )

  const sendGetRequest = async () => {
    try {

      const userInfo = LocalStorageService.getUserInfo();
      const payload = { userId: userInfo.userId };

      awardServices.getAllAwards(payload)
        .then(function (response) {
          console.log(response.data)
          setAwardState({
            ...awardState, awards: response.data
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
        <Card.Header>Awards</Card.Header>

        <Card.Body>
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Include?</th>
              </tr>
            </thead>
          <tbody>
            {
              awardState.awards.map((award, index) =>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{award.title}</td>
                    <td>{award.description}</td>
                    <td>{award.date}</td>
                    <td className='text-center'>
                      <input type='checkbox' onChange={(e) => {
                          changeHandler && changeHandler({type: MANAGED_TYPES.AWARD, value: award._id})
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

export default GetAwards;