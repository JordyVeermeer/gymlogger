import { AuthenticationButton } from "./authentication/AuthenticationButton";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

export const Homepage = () => {

    const navigate = useNavigate();
    const { isAuthenticated } = useAuth0();

    const nav = () => {
        navigate('/dashboard');
    }

    return (
        <div style={{"textAlign":"center"}}>
            <h1>Welcome to GymLogger!</h1>
            <h2>This is the homepage</h2>
            <AuthenticationButton />
            {
                isAuthenticated &&
                <Button variant="contained" onClick={nav} >To Dashboard</Button>
            }
        </div>
    );
}