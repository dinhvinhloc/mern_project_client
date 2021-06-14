import React from 'react';
import { NavLink } from 'react-router-dom';

function Breadcrumbs(props) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {props.links.map((breadcrumb, index) => {
                    return breadcrumb.active ?
                        <li key={index} className='breadcrumb-item active'>
                            {breadcrumb.label}
                        </li>
                        :
                        <li key={index} className='breadcrumb-item'>
                            <NavLink exact to={breadcrumb.path} className='text-dark'>
                                {breadcrumb.label}
                            </NavLink>
                        </li>
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumbs;