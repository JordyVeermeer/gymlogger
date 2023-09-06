import { AuthenticationButton } from "./authentication/AuthenticationButton";


export const Homepage = () => {

    return (
        <div style={{"textAlign":"center"}}>
            <h1>Welcome to GymLogger!</h1>
            <h2>This is the homepage</h2>
            <AuthenticationButton />
        </div>
    );
}