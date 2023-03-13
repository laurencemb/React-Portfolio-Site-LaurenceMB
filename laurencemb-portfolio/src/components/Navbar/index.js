import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './style.css'

function Navbar () {
    return (
        <nav className='navbar'>
            <div className='container'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <NavLink  
                            to='/'
                            end
                            className={({isActive}) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            >
                            About 
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink  
                            to='/projects'
                            className={({isActive}) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            >
                           My Projects 
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink  
                            to='/contact'
                            className={({isActive}) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            >
                            Contact Me
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;