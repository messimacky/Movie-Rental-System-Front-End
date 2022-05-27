import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Auth0Provider } from '@auth0/auth0-react';
const domain = 'dev-9-4lfoow.us.auth0.com';
const clientID = 'eFVI7iVYtxoJRqOqiMPGx2IH2biR3yWR';


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
