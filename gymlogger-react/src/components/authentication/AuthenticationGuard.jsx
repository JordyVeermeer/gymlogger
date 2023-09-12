import { withAuthenticationRequired } from "@auth0/auth0-react"

export const AuthenticationGuard = ({ component }) => {

    const ProtectedComponent = withAuthenticationRequired(component, {
        onRedirecting: () => {
            <p>loading..</p>
        },
        returnTo: '/dashboard'
    });

    return (
        <ProtectedComponent />
    )
}