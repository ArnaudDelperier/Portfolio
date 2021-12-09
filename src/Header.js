import { NavLink } from 'react-router-dom';

import './Header.css';
import './reset.css'

function Header() {

    return(
        <div className="header">
            <NavLink className="header__item" to="/">
                Home
            </NavLink>
            <NavLink className="header__item" to="/projects">
                Projets
            </NavLink>
            <NavLink className="header__item" to="/contact">
                Contact
            </NavLink>
        </div>
    )
}

export default Header;