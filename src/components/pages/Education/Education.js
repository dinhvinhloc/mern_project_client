
import {NavLink} from 'react-router-dom';

const Education = () => {

  return <div className="bodyLayout">
              <h3>Education Page</h3>
              <table border='1' className="skillTable">
                <tr>
                  <th className='skillsTablePad'>Start Year</th>
                  <th className='skillsTablePad'>End Year</th>
                  <th className='skillsTablePad'>Institute Name</th>
                  <th className='skillsTablePad'>Course Name</th>
                  <th className='skillsTablePad'> Action </th>
                </tr>
              </table>
              <NavLink to='/education/add' className='myButton'>Add</NavLink>
              <NavLink to='/education/edit/:id' className='myButton'>Edit</NavLink>
              <NavLink to='/education/delete/:id' className='myButton'>Delete</NavLink>
              <NavLink to='/Experience' className='myButton'>Next</NavLink>
        </div>;
};

export default Education;
