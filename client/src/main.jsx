import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const GOOGLE_CLIENT_ID = "422593479526-ssd26rlqtkkvtv6hnk0ihc221amr1dqc.apps.googleusercontent.com"

root.render(
  <ThirdwebProvider desiredChainId={ChainId.Sepolia}> 
    <Router>
    <GoogleOAuthProvider clientId = {GOOGLE_CLIENT_ID}>
      <StateContextProvider>
        <App />
      </StateContextProvider>
      </GoogleOAuthProvider>
    </Router>
  </ThirdwebProvider> 
)