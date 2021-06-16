import React from 'react';
import {NavLink} from 'react-router-dom';

const Skill = () => {
  return <div className="bodyLayout">
              <h3>Skills Page</h3>
              <table border='1' className="skillTable">
                <tr>
                  <th className='skillsTablePad'>Skill Name</th>
                  <th className='skillsTablePad'>Proficiency Level</th>
                  <th className='skillsTablePad'>Description</th>
                </tr>
              </table>
              <NavLink to='/skill/add' className='myButton'>Add</NavLink>
              <NavLink to='/skill/edit/:id' className='myButton'>Edit</NavLink>
              <NavLink to='/skill/delete/:id' className='myButton'>Delete</NavLink>
              <NavLink to='/language' className='myButton'>Next</NavLink>
        </div>;
};

export default Skill;
