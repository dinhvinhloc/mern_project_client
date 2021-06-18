import React from 'react';
import {NavLink} from 'react-router-dom';

const Experience = () => {
  return <div className="bodyLayout">
  <h3>Experience Page</h3>
  <table border='1' className="skillTable">
    <tr>
      <th className='skillsTablePad'>Start Year</th>
      <th className='skillsTablePad'>End Year</th>
      <th className='skillsTablePad'>Company Name</th>
      <th className='skillsTablePad'>Position</th>
      <th className='skillsTablePad'>Description </th>
      <th className='skillsTablePad'> Action </th>
    </tr>
  </table>
  <NavLink to='/experience/add' className='myButton'>Add</NavLink>
  <NavLink to='/experience/edit/:id' className='myButton'>Edit</NavLink>
  <NavLink to='/experience/delete/:id' className='myButton'>Delete</NavLink>
  <NavLink to='/skill' className='myButton'>Next</NavLink>
</div>;
};


export default Experience;
