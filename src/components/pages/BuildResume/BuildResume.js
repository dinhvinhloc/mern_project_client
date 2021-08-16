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
import GetEducations from './buildResumeSections/GetEducations';
import GetExperiences from './buildResumeSections/GetExperiences';
import GetAwards from './buildResumeSections/GetAwards';
import GetContacts from './buildResumeSections/GetContacts';
import * as builderService from '../../../services/builderService';
import { useHistory } from 'react-router-dom';

export const MANAGED_TYPES = {
    ABOUT_ME : 'about_me',
    SKILL : 'skill',
    EDUCATION :'education',
    EXPERIENCE : 'experience',
    AWARD : 'award',
    CONTACT : 'contact',
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

                    //Education
                    case MANAGED_TYPES.EDUCATION:
                        if (!selectedData.educations) {
                            setSelectedData({educations: [payload.value], ...selectedData})
                        } else {
                            // if payload.value exists in selectedData.skills => remove else add
                            // [12,34,5,6,77]
                            const newEducations = selectedData.educations;
                            const index = newEducations.indexOf(payload.value);
                            if (index === -1) {
                                // add this value
                                newEducations.push(payload.value);
                            } else {
                                // remove
                                newEducations.splice(index, 1);
                            }
                            setSelectedData({educations: [...newEducations], ...selectedData})
                        }
                        break;

                        //Experience
                        case MANAGED_TYPES.EXPERIENCE:
                        if (!selectedData.experiences) {
                            setSelectedData({experiences: [payload.value], ...selectedData})
                        } else {
                            // if payload.value exists in selectedData.skills => remove else add
                            // [12,34,5,6,77]
                            const newExperiences = selectedData.experiences;
                            const index = newExperiences.indexOf(payload.value);
                            if (index === -1) {
                                // add this value
                                newExperiences.push(payload.value);
                            } else {
                                // remove
                                newExperiences.splice(index, 1);
                            }
                            setSelectedData({experiences: [...newExperiences], ...selectedData})
                        }
                        break;

                        // AWARD
                        case MANAGED_TYPES.AWARD:
                            if (!selectedData.awards) {
                                setSelectedData({awards: [payload.value], ...selectedData})
                            } else {
                                // if payload.value exists in selectedData.awards => remove, else add
                                // [12,34,5,6,77]
                                const newAwards = selectedData.awards;
                                const index = newAwards.indexOf(payload.value);
                                if (index === -1) {
                                    // add this value
                                    newAwards.push(payload.value);
                                } else {
                                    // remove
                                    newAwards.splice(index, 1);
                                }
                                setSelectedData({awards: [...newAwards], ...selectedData})
                            }
                        break;

                        // CONTACT
                        case MANAGED_TYPES.CONTACT:
                            if (!selectedData.contacts) {
                                setSelectedData({contacts: [payload.value], ...selectedData})
                            } else {
                                // if payload.value exists in selectedData.contacts => remove else add
                                // [12,34,5,6,77]
                                const newContacts = selectedData.contacts;
                                const index = newContacts.indexOf(payload.value);
                                if (index === -1) {
                                    // add this value
                                    newContacts.push(payload.value);
                                } else {
                                    // remove
                                    newContacts.splice(index, 1);
                                }
                                setSelectedData({contacts: [...newContacts], ...selectedData})
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
            <h1>Build Resume </h1>
            <GetAboutme changeHandler={onStateChange}/>
            <GetSkills  changeHandler={onStateChange} />
            <GetEducations changeHandler={onStateChange}/>
            <GetExperiences changeHandler={onStateChange} />
            <GetAwards changeHandler={onStateChange} />
            <GetContacts changeHandler={onStateChange} />
            <NavLink to='/' className='myButton' onClick={onSubmit}>Build</NavLink>
              <NavLink to='/' className='myButton'>Cancel</NavLink>
        </div>
    );
}

export default BuildResume;