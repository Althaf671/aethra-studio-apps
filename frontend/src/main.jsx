import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="211248872690-s446l5namtkm1aaooeifpg2j9mf2ckhj.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);