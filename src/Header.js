import { NavLink } from 'react-router-dom';

import './Header.css';

function Header() {

    return(
        <div className="header">
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/projects">
                Projets
            </NavLink>
            <NavLink to="/contact">
                Contact
            </NavLink>
        </div>
    )
}

export default Header;