import './errorpage.css';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <div className="errorPage">
            <p>Oops.. There's nothing here!</p>
            <Link to={"/"}>Back to home</Link>
        </div>
    )
}