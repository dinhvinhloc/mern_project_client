import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {

    const logout = () => {
        
    }

    return (
        <nav className="navbar navbar-dark sticky-top bg-light flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/">Resume Builder</a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    
                        (<NavLink exact to='/login' className='nav-link'>Login</NavLink>)
                        : (<NavLink exact to='/login' onClick={logout} className='nav-link'>Logout</NavLink>)
                </li>
            </ul>
        </nav>
    );
}

export default Header;