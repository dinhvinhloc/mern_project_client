import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import Header from './Header';
import Home from '../pages/Home/Home';
import AboutMe from '../pages/AboutMe/AboutMe';
import EditAboutMe from '../pages/AboutMe/EditAboutMe'
import Contact from '../pages/Contact/Contact';
import Education from '../pages/Education/Education';

import Experience from '../pages/Experience/Experience';
import AddExperience from '../pages/Experience/AddExperience';
import EditExperience from '../pages/Experience/EditExperience';

import Skill from '../pages/Skill/Skill';
import AddSkill from '../pages/Skill/AddSkill';
import EditSkill from '../pages/Skill/EditSkill';
import DeleteSkill from '../pages/Skill/DeleteSkill';

import Language from '../pages/Language/Language';
import AddLanguage from '../pages/Language/AddLanguage';
import EditLanguage from '../pages/Language/EditLanguage';

import Project from '../pages/Project/Project';
import AddProject from '../pages/Project/AddProject';
import EditProject from '../pages/Project/EditProject';

import LoggedInRoute from './LoggedInRoute';
import { Container } from 'react-bootstrap';
import {
  FaInfo, FaUser, FaBullseye, FaUniversity, FaBuilding, FaTools,
  FaGlobe, FaProductHunt, FaEnvelopeOpenText, FaIdCard, FaHome
} from 'react-icons/fa';
import 'boxicons'


function MainContainer() {
  return (
    <div>
      <Header />
      <Container fluid>
        <Row>

          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
            <div className="sidebar-sticky pt-3">
              <ul className="nav flex-column">
                <li>
                  <NavLink exact to='/' className='nav-link'><i><FaHome /></i>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/about-me' className='nav-link'><i><FaInfo /></i>About Me</NavLink>
                </li>
                <li>
                  <NavLink to='/education' className='nav-link'><i><FaUniversity /></i>Education</NavLink>
                </li>
                <li>
                  <NavLink to='/experience' className='nav-link'><i><FaBuilding /></i>Experience</NavLink>
                </li>
                <li>
                  <NavLink to='/skill' className='nav-link'><i><FaTools /></i>Skill</NavLink>
                </li>
                <li>
                  <NavLink to='/language' className='nav-link'><i><FaGlobe /></i>Language</NavLink>
                </li>
                <li>
                  <NavLink to='/project' className='nav-link'><i><FaProductHunt /></i>Project</NavLink>
                </li>
                <li>
                  <NavLink to='/contact' className='nav-link'><i><FaIdCard /></i>Contact</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-md-4'>
            <LoggedInRoute path='/' exact component={Home} />
            <LoggedInRoute path='/about-me' exact component={AboutMe} />
            <LoggedInRoute path='/about-me/edit' exact component={EditAboutMe} />
            <LoggedInRoute path='/education' exact component={Education} />
            <LoggedInRoute path='/experience' exact component={Experience} />
            <LoggedInRoute path='/experience/add' exact component={AddExperience} />
            <LoggedInRoute path='/experience/edit/:id' exact component={EditExperience} />
            <LoggedInRoute path='/skill' exact component={Skill} />
            <LoggedInRoute path='/skill/add' exact component={AddSkill} />
            <LoggedInRoute path='/skill/edit/:id' exact component={EditSkill} />
            <LoggedInRoute path='/skill/delete/:id' exact component={DeleteSkill} />
            <LoggedInRoute path='/language' exact component={Language} />
            <LoggedInRoute path='/language/add' exact component={AddLanguage} />
            <LoggedInRoute path='/language/edit/:id' component={EditLanguage} />
            <LoggedInRoute path='/project' exact component={Project} />
            <LoggedInRoute path='/project/add' exact component={AddProject} />
            <LoggedInRoute path='/project/edit/:id' exact component={EditProject} />
            <LoggedInRoute path='/contact' exact component={Contact} />
          </main>
        </Row>
      </Container>
    </div>
  );
}

export default MainContainer;
