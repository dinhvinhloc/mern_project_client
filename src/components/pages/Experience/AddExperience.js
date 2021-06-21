import React from 'react';
import {NavLink} from 'react-router-dom';

const AddExperience = () => {
  return <div className="bodyLayout">
  <h3>Add Experience page</h3>
  <table className='skillTable'>
    <tr>
      <td className='skillTableTd'>Start Year</td>
      <td><input type="text" className="skillTextfield" name="StartYear" placeholder="2021"/></td>
    </tr>
    <tr>
      <td className='skillTableTd'>End Year</td>
      <td><input type="text" className="skillTextfield" name="EndYear" placeholder="2021"/></td>
    </tr>
    <tr>
      <td className='skillTableTd'>Company Name</td>
      <td><input type="text" className="skillTextfield" name="cName" placeholder="Infosys"/></td>
    </tr>
    <tr>
      <td className='skillTableTd'>Position</td>
      <td><input type="text" className="skillTextfield" name="position" placeholder="ITS"/></td>
    </tr>
    <tr>
      <td className='skillTableTd'>Description</td>
      <td><textarea rows="2" cols="25" className="skillTextfield" name="desp" placeholder="Worked as a Web-Developer"/></td>
    </tr>
  </table>
   
  <NavLink to="/experience" className="myButton">Save</NavLink>
</div>;
};


export default AddExperience;
