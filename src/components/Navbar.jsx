import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-bar">
            <ul className="nav-bar__nav-list">
                <li className="nav-bar__nav-item">
                    <NavLink to="/" className="nav-bar__nav-link">
                        Inicio
                    </NavLink>
                </li>
                <li className="nav-bar__nav-item">
                    <NavLink to="/alta" className="nav-bar__nav-link">
                        Alta
                    </NavLink>
                </li>
                <li className="nav-bar__nav-item">
                    <NavLink to="/contacto" className="nav-bar__nav-link">
                        Contacto
                    </NavLink>
                </li>
                <li className="nav-bar__nav-item">
                    <NavLink to="/nosotros" className="nav-bar__nav-link">
                        Nosotros
                    </NavLink>
                </li>
            </ul>
        </nav>/* <!-- nav-bar --> */
    )
}

export default Navbar