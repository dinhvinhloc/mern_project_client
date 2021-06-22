import React from 'react';
import {NavLink} from 'react-router-dom';

function EditAboutMe(props) {
    return (
        <div className="bodyLayout">
            <h3>Edit About Me</h3>
              <textarea rows="20" cols="100"></textarea><br></br>
              <NavLink to='/about-me' className='myButton'>Save</NavLink>
        </div>
    );
}

export default EditAboutMe;