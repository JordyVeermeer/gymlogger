import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const LoginCallback = () => {

    const navigate = useNavigate();

    useEffect(() => {
        console.log('navigating to dashboard..')
        //navigate('/dashboard');
    });

    return (
        <p>Redirecting..</p>
    )
}