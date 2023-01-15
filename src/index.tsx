import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

export const BASENAME = '/ambulance-handover';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

if (!domain) {
  throw Error('REACT_APP_AUTH0_DOMAIN required');
}
if (!clientId) {
  throw Error('REACT_APP_AUTH0_CLIENT_ID required');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const redirectUri = `${window.location.origin}${BASENAME}`;

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
    >
      <BrowserRouter basename={BASENAME}>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
