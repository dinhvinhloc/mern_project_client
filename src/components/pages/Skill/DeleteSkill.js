import React from 'react';
import {NavLink} from 'react-router-dom';

function DeleteSkill() {
    return (
        <div className='bodyLayout'>
            <h3>DeletSkill page</h3>
            <table className='skillTable'>
              <tr>
                <td className='skillTableTd'>Skill Name</td>
                <td><input type="text" className="skillTextfield" name="skillName" placeholder='Enter skill name to delete' size='30'/></td>
              </tr>
            </table>
            <NavLink to="/skill" className="myButton">Delete</NavLink>
            <NavLink to="/skill" className="myButton">Cancel</NavLink>
        </div>
    );
}

export default DeleteSkill;