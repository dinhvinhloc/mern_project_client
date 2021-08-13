import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import Header from './Header';
import Home from '../pages/Home/Home';
import AboutMe from '../pages/AboutMe/AboutMe';
import EditAboutMe from '../pages/AboutMe/EditAboutMe'
import AddAboutMe from '../pages/AboutMe/AddAboutMe'

import Contact from '../pages/Contact/Contact';
import AddContact from '../pages/Contact/AddContact';
import EditContact from '../pages/Contact/EditContact';

import Education from '../pages/Education/Education';
import AddEducation from '../pages/Education/AddEducation';
import EditEducation from '../pages/Education/EditEducation';


import Experience from '../pages/Experience/Experience';
import AddExperience from '../pages/Experience/AddExperience';
import EditExperience from '../pages/Experience/EditExperience';

import Skill from '../pages/Skill/Skill';
import AddSkill from '../pages/Skill/AddSkill';
import EditSkill from '../pages/Skill/EditSkill';

import Language from '../pages/Language/Language';
import AddLanguage from '../pages/Language/AddLanguage';
import EditLanguage from '../pages/Language/EditLanguage';

import Project from '../pages/Project/Project';
import AddProject from '../pages/Project/AddProject';
import EditProject from '../pages/Project/EditProject';

import Award from '../pages/Award/Award';
import AddAward from '../pages/Award/AddAward';
import EditAward from '../pages/Award/EditAward';

import Hobby from '../pages/Hobby/Hobby';
import AddHobby from '../pages/Hobby/AddHobby';
import EditHobby from '../pages/Hobby/EditHobby';

import BuildResume from '../pages/BuildResume/BuildResume'

import LoggedInRoute from './LoggedInRoute';
import {
  FaInfo, FaUniversity, FaBuilding, FaTools,
  FaGlobe, FaProductHunt, FaIdCard, FaHome,
  FaAward, FaBookOpen

} from 'react-icons/fa';
import {GiPuzzle} from 'react-icons/gi';
import 'boxicons'


function MainContainer() {
  return (
    <div>
      
        <div>

          <nav id="sidebarMenu" className="col-md-3 col-lg-1 d-md-block sidebar collapse">
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
                  <NavLink to='/award' className='nav-link'><i><FaAward /></i>Award</NavLink>
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
                <li>
                  <NavLink to='/hobby' className='nav-link'><i><FaBookOpen /></i>Hobbies</NavLink>
                </li>
                <li>
                  <NavLink to='/build-resume' className='nav-link'><i><GiPuzzle /></i>Build Resume</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <div className="main-area">
          <Header />
          <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-md-4 wrapper'>
            <LoggedInRoute path='/' exact component={Home} />
            <LoggedInRoute path='/about-me' exact component={AboutMe} />
            <LoggedInRoute path='/about-me/edit/:id' exact component={EditAboutMe} />
            <LoggedInRoute path='/about-me/add' exact component={AddAboutMe} />
            <LoggedInRoute path='/education' exact component={Education} />
            <LoggedInRoute path='/education/add' exact component={AddEducation} />
            <LoggedInRoute path='/education/edit/:id' exact component={EditEducation} />
            
            <LoggedInRoute path='/experience' exact component={Experience} />
            <LoggedInRoute path='/experience/add' exact component={AddExperience} />
            <LoggedInRoute path='/experience/edit/:id' exact component={EditExperience} />
            <LoggedInRoute path='/skill' exact component={Skill} />
            <LoggedInRoute path='/skill/add' exact component={AddSkill} />
            <LoggedInRoute path='/skill/edit/:id' exact component={EditSkill} />
            <LoggedInRoute path='/language' exact component={Language} />
            <LoggedInRoute path='/language/add' exact component={AddLanguage} />
            <LoggedInRoute path='/language/edit/:id' component={EditLanguage} />
            <LoggedInRoute path='/project' exact component={Project} />
            <LoggedInRoute path='/project/add' exact component={AddProject} />
            <LoggedInRoute path='/project/edit/:id' exact component={EditProject} />
            <LoggedInRoute path='/award' exact component={Award} />
            <LoggedInRoute path='/award/add' exact component={AddAward} />
            <LoggedInRoute path='/award/edit/:id' exact component={EditAward} />
            <LoggedInRoute path='/contact' exact component={Contact} />
            <LoggedInRoute path='/contact/add' exact component={AddContact} />
            <LoggedInRoute path='/contact/edit/:id' exact component={EditContact} />
            <LoggedInRoute path='/hobby' exact component={Hobby} />
            <LoggedInRoute path='/hobby/add' exact component={AddHobby} />
            <LoggedInRoute path='/hobby/edit/:id' exact component={EditHobby} />
            <LoggedInRoute path='/build-resume' exact component={BuildResume} />
          </main>
          </div>
        </div>
    </div>
  );
}

export default MainContainer;
