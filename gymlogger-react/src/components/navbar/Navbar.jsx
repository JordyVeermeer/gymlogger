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
            <div className='navHeader'>
                <Link to="/dashboard"><h1>GymLogger</h1></Link>
            </div>
            <div className='navItems'>
                <ul>
                    <NavbarItem label="Exercises" to="/exercises" />
                    <NavbarItem label="My workouts" to="/workouts" />
                    <NavbarItem label="My schedule" to="/progress" />
                    <NavbarItem label="Progress" to="/progress" />
                </ul>
            </div>
            <div className="navAuth">
                <AuthenticationButton />
            </div>
        </div>
    );
}