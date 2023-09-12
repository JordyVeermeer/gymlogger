import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


export const Auth0ProviderWithNavigate = ({children}) => {

    const navigate = useNavigate();

    const onRedirectCallback = (appState) => {
        navigate(appState?.returnTo || window.location.pathname)
    };

    return(
        <Auth0Provider
            domain='dev-dwjylcygmkes8a40.eu.auth0.com'
            clientId='8c7K8y5cO1wtMvMxSZv3Tg1fBL2PmYjR'
            authorizationParams={{
                redirect_uri: 'http://localhost:3000/dashboard',
                audience: `${process.env.REACT_APP_AUTH0_API_AUDIENCE}`,
                scope: "read:current_user update:current_user_metadata offline_access",
            }}
            cacheLocation='localstorage'
            useRefreshTokens
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
}