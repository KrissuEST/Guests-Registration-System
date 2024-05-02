import { NavLink } from "react-router-dom";
import LeftNavbarLogo from '../../Images/Logos/logo.svg';
import RightNavbarLogo from '../../Images/Logos/symbol.svg';

export const Navbar = () => {
    // Our 1st component
    return(
        // Bootstrap navbar
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
            <div className='container-fluid'>
                <span className='navbar-brand'>
                    <img src={LeftNavbarLogo} alt="React Logo"/>
                </span>
                <button className='navbar-toggler' type='button'
                    data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown' aria-expanded='false'
                    aria-label='Toggle Navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    {/* ul - unordered list */}
                    <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/home'>Avaleht</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to="/search">Search Books</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to="/addEvent">Ürituse lisamine</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to="/addParticipantToEvent">Osavõtja lisamine</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to="/participant">Osavõtja info</NavLink>
                    </li>
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                    <li className='nav-item m-1'>
                        <img src={RightNavbarLogo} alt="React Logo"/>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}