import React from 'react';
import {NavLink} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { FaPenSquare, FaTrash } from 'react-icons/fa';
import * as skillServices from './../../../services/skillServices';
import LocalStorageService from './../../../utils/localStorage';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import GetSkills from './buildResumeSections/GetSkills';
import GetAboutme from './buildResumeSections/GetAboutme';
import * as builderService from '../../../services/builderService';
import { useHistory } from 'react-router-dom';

export const MANAGED_TYPES = {
    ABOUT_ME : 'about_me',
    SKILL : 'skill',
    //... add more
}

function BuildResume() {
    const history = useHistory();
    const [selectedData, setSelectedData] = useState({title: 'My Resume', description: "General Resume"});
    /**
     *  title: req.body.title,
        description: req.body.description,
        educations: req.body.educations || [],
        experiences: req.body.experiences || [],
        skills: req.body.skills || [],
        languages: req.body.languages || [],
        projects: req.body.projects || [],
        awards: req.body.awards || [],
        hobbies: req.body.hobbies || [],
        aboutmes: req.body.aboutmes || [],
     */
    const onStateChange = (payload)  => {
        if (!payload || !payload.type || !payload.value)
            return;

        
        switch(payload.type) {
            //skills
            case MANAGED_TYPES.SKILL:
                if (!selectedData.skills) {
                    setSelectedData({skills: [payload.value], ...selectedData})
                } else {
                    // if payload.value exists in selectedData.skills => remove else add
                    // [12,34,5,6,77]
                    const newSkills = selectedData.skills;
                    const index = newSkills.indexOf(payload.value);
                    if (index === -1) {
                        // add this value
                        newSkills.push(payload.value);
                    } else {
                        // remove
                        newSkills.splice(index, 1);
                    }
                    setSelectedData({skills: [...newSkills], ...selectedData})
                }
                break;

                case MANAGED_TYPES.ABOUT_ME:
                    if (!selectedData.aboutmes) {
                        setSelectedData({aboutmes: [payload.value], ...selectedData})
                    } else {
                        // if payload.value exists in selectedData.skills => remove else add
                        // [12,34,5,6,77]
                        const newAboutme = selectedData.aboutmes;
                        const index = newAboutme.indexOf(payload.value);
                        if (index === -1) {
                            // add this value
                            newAboutme.push(payload.value);
                        } else {
                            // remove
                            newAboutme.splice(index, 1);
                        }
                        setSelectedData({aboutmes: [...newAboutme], ...selectedData})
                    }
                    break;

            default://
        }
        
    }  

    const onSubmit = (e) => {
        builderService.createResume(selectedData)
          .then(response => {
            console.log(response.data);
            history.push('/')
          })
          .catch((error) => {
            let errorMessage = [];
            error && error.errors && error.errors.forEach(error =>{
              errorMessage.push(error.param + ": " + error.msg)
            })
          });
    }

    return (
        <div className='bodyLayout'>
            <h1>Build Resume</h1>
            <GetAboutme changeHandler={onStateChange}/>
            <GetSkills  changeHandler={onStateChange} />
            <NavLink to='/' className='myButton' onClick={onSubmit}>Build</NavLink>
              <NavLink to='/' className='myButton'>Cancel</NavLink>
        </div>
    );
}

export default BuildResume;