import React from 'react';
import {NavLink} from 'react-router-dom';
import BuildResumeCarousel from './BuildResumeCarousel';

function BuildResume() {
    return (
        <div className="bodyLayout">
              <h3>Build Resume</h3>
              <BuildResumeCarousel/>
              <NavLink to='/' className='myButton'>Build</NavLink>
              <NavLink to='/' className='myButton'>Cancel</NavLink>
        </div>
    );
}

export default BuildResume;