import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-dwjylcygmkes8a40.eu.auth0.com'
      clientId='8c7K8y5cO1wtMvMxSZv3Tg1fBL2PmYjR'
      authorizationParams={{
        redirect_uri: 'http://localhost:3000/dashboard',
        audience: `${process.env.REACT_APP_AUTH0_API_AUDIENCE}`,
        scope: "read:current_user update:current_user_metadata offline_access",
      }}
      cacheLocation='localstorage'
      useRefreshTokens={true}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
