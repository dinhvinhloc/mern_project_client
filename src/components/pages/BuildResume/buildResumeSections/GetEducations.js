import React from 'react';
import {useState, useEffect} from 'react';
import { Table, Card } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import * as educationServices from '../../../../services/educationServices';
import LocalStorageService from '../../../../utils/localStorage';
import { MANAGED_TYPES } from '../BuildResume';

function GetEducations({changeHandler}) {

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
              <Card.Header>Educations</Card.Header>
              
                <Card.Body>
              <Table bordered hover>
            <thead>
              <tr>
                  <th>#</th>
                  <th>Start Year</th>
                  <th>End Year</th>
                  <th>Institute Name</th>
                  <th>Course Name</th>
                <th>Include?</th>
              </tr>
            </thead>
            <tbody>
              {
                educationState.educations.map((education, index) =>
                
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{education.syear}</td>
                      <td>{education.eyear}</td>
                      <td>{education.iname}</td>
                      <td>{education.cname}</td>
                      <td className='text-center'>
                        <input type='checkbox' onChange={(e) => {
                            changeHandler && changeHandler({type: MANAGED_TYPES.EDUCATION, value: education._id})
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

export default GetEducations;