import React from 'react';
import {NavLink} from 'react-router-dom';

const EditSkill = () => {
  return <div className="bodyLayout">
            <h3>EditSkill page</h3>
            <table className='skillTable'>
              <tr>
                <td className='skillTableTd'>Skill Name</td>
                <td><input type="text" className="skillTextfield" name="skillName" placeholder='Enter skill name to search' size='30'/></td>
              </tr>
              <tr>
                <td className='skillTableTd'>Proficiency Level</td>
                <td><input type="text" className="skillTextfield" name="profLevel" size='30'/></td>
              </tr>
              <tr>
                <td className='skillTableTd'>Skill Description</td>
                <td><input type="text" className="skillTextfield" name="skillDesc" size='30'/></td>
              </tr>
            </table>
            <NavLink to="/skill/edit/:id" className="myButton">Search</NavLink>
            <NavLink to="/skill" className="myButton">Save</NavLink>
            <NavLink to="/skill" className="myButton">Cancel</NavLink>
          </div>;
};

export default EditSkill;
