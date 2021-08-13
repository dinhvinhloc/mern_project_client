import React from 'react';
import {useState, useEffect} from 'react';
import { Table, Card } from 'react-bootstrap';
import * as aboutmeServices from '../../../../services/aboutmeServices';
import LocalStorageService from '../../../../utils/localStorage';
import { MANAGED_TYPES } from '../BuildResume';

function GetAboutme({changeHandler}) {
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

    return <div className="bodyLayout">
    
    <Card
        bg='light'
        text='dark'
      >
      <Card.Header>About Me</Card.Header>
      <Card.Body>
          
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Aboutme Info</th>
                <th>Include?</th>
              </tr>
            </thead>
            <tbody>
              {
                aboutmeState.aboutme.map((aboutme, index) =>
                  
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{aboutme.info}</td>
                      <td className='text-center'>
                      <input type='checkbox' onChange={(e) => {
                            changeHandler && changeHandler({type: MANAGED_TYPES.ABOUT_ME, value: aboutme._id})
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

}

export default GetAboutme;