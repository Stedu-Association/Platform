import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import CustomCursor from './components/CustomCursor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-l7x67zmcfqmsviri.us.auth0.com"
      clientId="FCyrQNSi9Tyhr6tYJ91QP7XvdgO2W6W5"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
      <CustomCursor />
    </Auth0Provider>
  </React.StrictMode>
);
