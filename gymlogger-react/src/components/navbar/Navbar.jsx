import { Link } from 'react-router-dom';
import './navbar.css';
import { AuthenticationButton } from '../authentication/AuthenticationButton';

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
                <Link to="/"><h1>GymLogger</h1></Link>
            </div>
            <div className='navRight'>
                <ul>
                    <NavbarItem label="Search" to="/search" />
                    <NavbarItem label="My Schedule" to="/myschedule" />
                    <NavbarItem label="Progress" to="/progress" />
                    <AuthenticationButton />
                </ul>
            </div>
        </div>
    );
}