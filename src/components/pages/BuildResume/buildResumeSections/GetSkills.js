import React from 'react';
import {useState, useEffect} from 'react';
import { Table, Card } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import * as skillServices from '../../../../services/skillServices';
import LocalStorageService from '../../../../utils/localStorage';
import { MANAGED_TYPES } from '../BuildResume';

function GetSkills({changeHandler}) {

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
          
          console.error(err);
        }
      };
      useEffect(() => {
        sendGetRequest();
      }, []);

    // input handlers
    // skill, about me, ...
    // update selected skills in the

    // Parent -> child (change -> dispatch("SKILL_SELCTED"))
    // const onSkillToggle = (skillId) => {

    // }

    return (
        <div className="bodyLayout">
            
            <Card
        bg='light'
        text='dark'
      >
              <Card.Header>Skills</Card.Header>
              
                <Card.Body>
              <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Proficiency level</th>
                <th>Description</th>
                <th>Include?</th>
              </tr>
            </thead>
            <tbody>
              {
                skillState.skills.map((skill, index) =>
                
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{skill.name}</td>
                      <td>{skill.proflevel}</td>
                      <td>{skill.description}</td>
                      <td className='text-center'>
                        <input type='checkbox' onChange={(e) => {
                            changeHandler && changeHandler({type: MANAGED_TYPES.SKILL, value: skill._id})
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

export default GetSkills;