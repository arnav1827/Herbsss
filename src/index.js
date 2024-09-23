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
      domain="dev-58tmnphjjzgywfwj.us.auth0.com"
      clientId="6pvpeIvHeXCkg8AKsfhfc6xZWARrKxWZ"
      authorizationParams={{
      redirect_uri:"http://localhost:5173/"   //write your url here
     }}
    >
    <App />
    </Auth0Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
