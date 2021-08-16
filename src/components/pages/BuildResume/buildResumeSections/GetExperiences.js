import React from 'react';
import {useState, useEffect} from 'react';
import { Table, Card } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import * as educationServices from '../../../../services/experienceServices';
import LocalStorageService from '../../../../utils/localStorage';
import { MANAGED_TYPES } from '../BuildResume';

function GetExperiences({changeHandler}) {

    const [experienceState, setExperienceState] = useState(
        {
          experiences: [],
          searchKeyword: ''
        }
      )
    
      const sendGetRequest = async () => {
        try {
    
          const userInfo = LocalStorageService.getUserInfo();
          const payload = { userId: userInfo.userId };
    
          educationServices.getAllExperiences(payload)
            .then(function (response) {
              console.log(response.data)
              setExperienceState({
                ...experienceState, experiences: response.data
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
              <Card.Header>Experiences</Card.Header>
              
                <Card.Body>
              <Table bordered hover>
            <thead>
              <tr>
                  <th>#</th>
                  <th>Start Year</th>
                  <th>End Year</th>
                  <th>Company Name</th>
                  <th>Position</th>
                  <th>Description</th>
                 
                <th>Include?</th>
              </tr>
            </thead>
            <tbody>
              {
                experienceState.experiences.map((experience, index) =>
                
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{experience.syear}</td>
                      <td>{experience.eyear}</td>
                      <td>{experience.cname}</td>
                      <td>{experience.position}</td>
                      <td>{experience.description}</td>
                    
                      <td className='text-center'>
                        <input type='checkbox' onChange={(e) => {
                            changeHandler && changeHandler({type: MANAGED_TYPES.EXPERIENCE, value: experience._id})
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

export default GetExperiences;