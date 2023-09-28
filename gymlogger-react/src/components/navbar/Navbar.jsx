import { Link } from 'react-router-dom';
import './navbar.css';
import { AuthenticationButton } from '../authentication/AuthenticationButton';
import { Menu, ArrowBackIosNew } from '@mui/icons-material';
import { useEffect, useState } from 'react';

function NavbarItem({label, to, className}) {
    return (
        <li className='navbarItem'  >
            <Link className={className} to={to}>
                {label}
            </Link>
        </li>
    );
}

function Hamburger({navItems}) {

    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

    const toggleMenu = () => {
        setHamburgerIsOpen(!hamburgerIsOpen);
    };

    return (
        <div className="hamburger">
            <div className="hamburger-icons">
                <ArrowBackIosNew />
                <Menu onClick={toggleMenu} />
            </div>
            {
                hamburgerIsOpen &&
                <div className="nav-items-hamburger">
                    <ul>
                        {
                            navItems.map((item) => (
                                <NavbarItem key={`${item}-key`} label={item[0]} to={item[1]} />
                            ))
                        }
                    </ul>

                </div>
            }
        </div>
    )
}

export default function Navbar() {
    const navItems = [
        ["Exercises", "/exercises"],
        ["My workouts", "/workouts"],
        ["My schedule", "/schedules"],
        ["Progress", "/progress"]
    ];

    return (
        <div className="navbar">
            <div className='navbar-desktop'>
                <div className='navHeader'>
                    <Link to="/dashboard"><h1>GymLogger</h1></Link>
                </div>
                <div className='navItems'>
                    <ul>
                        {
                            navItems.map((item) => (
                                <NavbarItem key={`${item}-key`} label={item[0]} to={item[1]} />
                            ))
                        }
                    </ul>
                </div>
                <div className="navAuth">
                    <AuthenticationButton />
                </div>
            </div>
            
            <div className="navbar-mobile">
                <Hamburger navItems={navItems} />
            </div>
            
        </div>
    );
}