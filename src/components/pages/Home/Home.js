import React from 'react';
import { useState, useEffect } from 'react';
import * as builderService from './../../../services/builderService';
import * as skillServices from './../../../services/skillServices';
import * as aboutmeServices from './../../../services/aboutmeServices';
import LocalStorageService from './../../../utils/localStorage';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import HomeCarousel from './HomeCarousel';


// useEffect => getAllresumes => success => setResumes([...])
// state => [resumes, setResume] = [{}, {}]
/**
 * render => resumes.map() => {
 * // Resume
 * }
 * 
 */
function Home(props) {

    const [resumes, setResumes] = useState([])
    const [allSkills, setAllSkills] = useState([])
    const [allAboutMe, setAllAboutMe] = useState([])

    const getAllAboutMe = async () => {

        try {
            const userInfo = LocalStorageService.getUserInfo();
            const payload = { userId: userInfo.userId };
      
            aboutmeServices.getAllAboutme(payload)
              .then(function (response) {
                console.log(response.data)
                setAllAboutMe(response.data);
              })
        } catch (e) {
            console.error("Error fetching all About me: "+e)
        }
    }

    const getAllSkills = async () => {
        try {
            const userInfo = LocalStorageService.getUserInfo();
            const payload = { userId: userInfo.userId };
      
            skillServices.getAllSkills(payload)
              .then(function (response) {
                //console.log(response.data)
                setAllSkills(response.data);
              })
        } catch (e) {
            console.error("Error fetching all Skills: "+e)
        }
    }

      const sendGetRequest = async () => {
        try {
    
          const userInfo = LocalStorageService.getUserInfo();
          const payload = { userId: userInfo.userId };
    
          builderService.getAllResumes(payload)
            .then(function (response) {
            //   console.log(response.data) //array of resume objects
            //   console.log(allSkills);
              
              if (response.data) {
                 
                setResumes([...response.data]);
              }
            }).catch(e => {
                console.log(e);
            });
    
        } catch (err) {
          // Handle Error Here
          console.error(err);
        }
      };
      useEffect(() => {
            getAllAboutMe();
            getAllSkills();
            // getAllAboutMe(); // to do
            sendGetRequest();
      }, []);

    const renderResume = (resume) => {
        //console.log(allSkills)
        if (!allSkills || !allAboutMe)
         return null;

        // filer out skills for this resume from allSkills
        const skillsToRender = allSkills.filter((skill) => resume.skills && resume.skills.indexOf(skill._id) !== -1 );
        const aboutmeToRender = allAboutMe.filter((aboutme) => resume.aboutmes && resume.aboutmes.indexOf(aboutme._id) !== -1 );

        // filer out aboutme for this resume from allAboutMe
        // const aboutMeToRender = allAboutMe.filter((aboutMe) => resume.aboutMe && resume.aboutMe.indexOf(aboutMe._id) !== -1 );

        return (
            <div className="resume-wrapper mb-5">
                <strong>{resume.title}</strong>

                {/* About Me */}
                <Card
                bg='light'
                text='dark'
                >
                <Card.Header>About Me</Card.Header>
                <Card.Body>
                <Table bordered hover>
                <thead>
                <tr>
                    <th>Info</th>
                </tr>
                </thead>
                <tbody>
                {
                    aboutmeToRender && aboutmeToRender.map((aboutme) => 
                        <tr>
                            <td>{aboutme.info}</td>
                        </tr>
                    
                    )
                }
                </tbody>
                </Table>
                </Card.Body>
                </Card>

                {/* Skills */}
                <Card
                bg='light'
                text='dark'
                >
                <Card.Header>Skills</Card.Header>
                <Card.Body>
                <Table bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Proficiency level</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {
                    skillsToRender && skillsToRender.map((skill) => 
                        <tr>
                            <td>{skill.name}</td>
                            <td>{skill.proflevel}</td>
                            <td>{skill.description}</td>
                        </tr>
                        // <li key={skill._id}>{skill.description}</li>
                        // <p>{skill.proflevel}</p>
                        // <p>{skill.description}</p>
                    
                    )
                }
                </tbody>
                </Table>
                </Card.Body>
                </Card>
            </div>
        )
    }

    return (
        <div className="bodyLayout">
            <div className="resume-container">
                {
                    resumes && resumes.map((resume) => renderResume(resume))
                }
            </div>
        </div>
    );
}

export default Home;