import React from 'react';
import { useState, useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { FaTrash } from 'react-icons/fa';
import Pdf from 'react-to-pdf';
import * as builderService from './../../../services/builderService';
import * as skillServices from './../../../services/skillServices';
import * as educationServices from './../../../services/educationServices';
import * as experienceServices from './../../../services/experienceServices';
import * as aboutmeServices from './../../../services/aboutmeServices';
import LocalStorageService from './../../../utils/localStorage';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
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
  const [allEducations, setAllEducations] = useState([])
  const [allExperiences, setAllExperiences] = useState([])

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
      console.error("Error fetching all About me: " + e)
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
      console.error("Error fetching all Skills: " + e)
    }
  }

  const getAllEducations = async () => {
    try {
      const userInfo = LocalStorageService.getUserInfo();
      const payload = { userId: userInfo.userId };

      educationServices.getAllEducations(payload)
        .then(function (response) {
          //console.log(response.data)
          setAllEducations(response.data);
        })
    } catch (e) {
      console.error("Error fetching all Skills: " + e)
    }
  }

  const getAllExperiences = async () => {
    try {
      const userInfo = LocalStorageService.getUserInfo();
      const payload = { userId: userInfo.userId };

      experienceServices.getAllExperiences(payload)
        .then(function (response) {
          //console.log(response.data)
          setAllExperiences(response.data);
        })
    } catch (e) {
      console.error("Error fetching all Experiences: " + e)
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
    getAllEducations();
    getAllExperiences();
    // getAllAboutMe(); // to do
    sendGetRequest();
  }, []);

  const renderResume = (resume) => {
    //console.log(allSkills)
    if (!allSkills || !allAboutMe || !allEducations || !allExperiences)
      return null;

    // filer out skills for this resume from allSkills
    const skillsToRender = allSkills.filter((skill) => resume.skills && resume.skills.indexOf(skill._id) !== -1);
    const aboutmeToRender = allAboutMe.filter((aboutme) => resume.aboutmes && resume.aboutmes.indexOf(aboutme._id) !== -1);
    const educationsToRender = allEducations.filter((education) => resume.educations && resume.educations.indexOf(education._id) !== -1);
    const experiencesToRender = allExperiences.filter((experience) => resume.experiences && resume.experiences.indexOf(experience._id) !== -1);

    // filer out aboutme for this resume from allAboutMe
    // const aboutMeToRender = allAboutMe.filter((aboutMe) => resume.aboutMe && resume.aboutMe.indexOf(aboutMe._id) !== -1 );

    const ref = React.createRef();

    const onDeleteHandler = (id) => {
      confirmAlert({
        title: 'Confirm to delete',
        message: 'Are you sure to do this.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              builderService.deleteResume(id).then(response => {
                sendGetRequest();
              })
                .catch((error) => {
                  console.log('Delete Resume: ' + error);
                });
            }
          },
          {
            label: 'No'
          }
        ]
      });
    }

   

    return (
      
      
      <div className="resume-wrapper mb-5"  >
        <NavLink exact to='#' className='mr-3'><FaTrash className='text-danger' onClick={() => onDeleteHandler(resume._id)} /></NavLink>
        <Pdf targetRef={ref} filename="Resume.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
       
      <div  ref={ref} >
       
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

          <Card.Header>Education</Card.Header>
          <Card.Body>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Start Year</th>
                  <th>End Year</th>
                  <th>Course Name</th>
                  <th>Institute Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  educationsToRender && educationsToRender.map((education) =>
                    <tr>
                      <td>{education.syear}</td>
                      <td>{education.eyear}</td>
                      <td>{education.cname}</td>
                      <td>{education.iname}</td>
                    </tr>
                    // <li key={skill._id}>{skill.description}</li>
                    // <p>{skill.proflevel}</p>
                    // <p>{skill.description}</p>

                  )
                }
              </tbody>
            </Table>
          </Card.Body>

          <Card.Header>Experience</Card.Header>
          <Card.Body>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Start Year</th>
                  <th>End Year</th>
                  <th>Company Name</th>
                  <th>Position</th>
                  <th>Description</th>
                  
                </tr>
              </thead>
              <tbody>
                {
                  experiencesToRender && experiencesToRender.map((experience) =>
                    <tr>
                      <td>{experience.syear}</td>
                      <td>{experience.eyear}</td>
                      <td>{experience.cname}</td>
                      <td>{experience.position}</td>
                      <td>{experience.description}</td>
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