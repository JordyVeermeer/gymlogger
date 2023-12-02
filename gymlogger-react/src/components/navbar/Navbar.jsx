import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { AuthenticationButton } from '../authentication/AuthenticationButton';
import { Menu, ArrowBackIosNew } from '@mui/icons-material';
import { useState } from 'react';
import logo from '../../assets/gymlogger_logo.png';

function NavbarItem({label, to, className, onClick}) {
    return (
        <li onClick={onClick} className={className}  >
            <Link to={to}>
                {label}
            </Link>
        </li>
    );
}

function Hamburger({navItems}) {

    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
    
    const navigate = useNavigate();

    const toggleMenu = () => {
        setHamburgerIsOpen(!hamburgerIsOpen);
        console.log(`Menu ${hamburgerIsOpen ? "closed" : "opened"}`);
    };

    const goBack = () => {
        navigate(-1);
        //toggleMenu();
    }


    return (
        <div className="hamburger">
            <div className="hamburger-icons">
                <ArrowBackIosNew onClick={goBack} />
                <img src={logo} alt='logo-gymlogger' onClick={() => navigate('/dashboard')} />
                <Menu onClick={toggleMenu} />
            </div>
            {
                hamburgerIsOpen &&
                <div className="nav-items-hamburger">
                    <ul>
                        {
                            navItems.map((item) => (
                                <NavbarItem onClick={toggleMenu} className={"nav-item-hamburger"} key={`${item}-key`} label={item[0]} to={item[1]} />
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