import React from 'react';
import {NavLink} from 'react-router-dom';

const AddSkill = () => {
  return <div className="bodyLayout">
            <h3>AddSkill page</h3>
            <table className='skillTable'>
              <tr>
                <td className='skillTableTd'>Skill Name</td>
                <td><input type="text" className="skillTextfield" name="skillName"/></td>
              </tr>
              <tr>
                <td className='skillTableTd'>Proficiency Level</td>
                <td><input type="text" className="skillTextfield" name="profLevel"/></td>
              </tr>
              <tr>
                <td className='skillTableTd'>Skill Description</td>
                <td><input type="text" className="skillTextfield" name="skillDesc"/></td>
              </tr>
            </table>
             
            <NavLink to="/skill" className="myButton">Save</NavLink>
          </div>;
};

export default AddSkill;
