import { useAuth0 } from '@auth0/auth0-react';
import './errorpage.css';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="errorPage">
            <p>Oops.. There's nothing here!</p>
            {
                isAuthenticated ? 
                <Link to={"/dashboard"}>Back to dashboard</Link>
                : <Link to={"/"}>Back to home</Link>
            }
        </div>
    )
}