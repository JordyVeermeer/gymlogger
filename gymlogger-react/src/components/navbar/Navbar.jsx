import { Link } from 'react-router-dom';
import './navbar.css';

function NavbarItem({label, to, className}) {
    return (
        <li className='navbarItem'>
            <Link className={className} to={to}>
                {label}
            </Link>
        </li>
    );
}

export default function Navbar() {
    return (
        <div className="navbar">
            <div className='navLeft'>
                <h1>GymLogger</h1>
            </div>
            <div className='navRight'>
                <ul>
                    <NavbarItem label="Search" to="/search" />
                    <NavbarItem label="My Schedule" to="/myschedule" />
                    <NavbarItem label="Progress" to="/progress" />
                    <NavbarItem className="logInButton" label="Log In" to="/login" />
                </ul>
            </div>
        </div>
    );
}