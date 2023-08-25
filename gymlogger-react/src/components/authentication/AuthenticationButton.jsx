import { useAuth0 } from "@auth0/auth0-react"
import { LogoutButton } from "./LogoutButton";
import { LoginButton } from "./LoginButton";

export const AuthenticationButton = () => {
    const { isAuthenticated, user } = useAuth0();

    if (isAuthenticated) {
        return (
            <LogoutButton />
        );
    }

    return <LoginButton />
}