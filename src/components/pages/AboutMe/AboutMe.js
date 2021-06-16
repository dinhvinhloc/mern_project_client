import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutMe = () => {


  return <div className="bodyLayout">
              <h3>About Me Page</h3>
              <textarea rows="20" cols="100"></textarea><br></br>
              <NavLink to='/about-me/edit' className='myButton'>Edit</NavLink>
              <NavLink to='/education' className='myButton'>Next</NavLink>
        </div>
}

export default AboutMe;
