import React from 'react';
import {NavLink} from 'react-router-dom';

const AddEducation = () => {
  return <div className="bodyLayout">
  <h3>Add Education page</h3>
  <table className='skillTable'>
    <tr>
      <td className='skillTableTd'>Eduction Start Year</td>
      <td><input type="text" className="skillTextfield" name="edStartYear" placeholder="2021"/></td>
    </tr>
    <tr>
      <td className='skillTableTd'>Eduction End Year</td>
      <td><input type="text" className="skillTextfield" name="edEndYear" placeholder="2021"/></td>
    </tr>
    <tr>
      <td className='skillTableTd'>Institute Name</td>
      <td><input type="text" className="skillTextfield" name="inName" placeholder="Humber College"/></td>
    </tr>
    <tr>
      <td className='skillTableTd'>Course Name</td>
      <td><input type="text" className="skillTextfield" name="csName" placeholder="ITS"/></td>
    </tr>
  </table>
   
  <NavLink to="/education" className="myButton">Save</NavLink>
</div>;
};

export default AddEducation;