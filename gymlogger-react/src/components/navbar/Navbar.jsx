import { Link } from 'react-router-dom';

function NavbarItem({label, to}) {
    return (
        <li>
            <Link to='/'>
                {label}
            </Link>
        </li>
    );
}

export default function Navbar() {
    return (
    <div className="navbar">
        <ul>
            <NavbarItem label="My Exercises" to="/myexercises"/>
            <NavbarItem label="Browse Exercises" to="/exercises"/>
        </ul>
    </div>
    );
}