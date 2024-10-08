import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOkto } from "okto-sdk-react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
 
function LoginPage() {
 
  console.log("LoginPage component rendered");
  const navigate = useNavigate();
  const { authenticate } = useOkto();
  const [authToken, setAuthToken] = useState("");
  const BASE_URL = "https://sandbox-api.okto.tech";
  const OKTO_CLIENT_API = "45f2e500-bbaa-4dd2-becf-c91b9290b866 ";
 
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  };
 
   const apiService = axios.create({
    baseURL: BASE_URL,
    headers: {
      "x-api-key": OKTO_CLIENT_API,
      "Content-Type": "application/json",
    },
  });
 
  const handleGoogleLogin = async (credentialResponse) => {
    console.log("Google login response:", credentialResponse);
    const idToken = credentialResponse.credential;
    console.log("google idtoken: ", idToken);
    authenticate(idToken, async (authResponse, error) => {
      if (authResponse) {
        console.log("auth token received", authToken);
        navigate("/home");
      }
      if (error) {
        console.error("Authentication error:", error);
      }
    });
  };
 
  return (
    <div style={containerStyle}>
      <h1 className="color : white">Login</h1>
      {!authToken ? (
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={(error) => {
            console.log("Login Failed", error);
          }}
          useOneTap
          promptMomentNotification={(notification) =>
            console.log("Prompt moment notification:", notification)
          }
        />
      ) : (
        <> Authenticated </>
      )}
    </div>
  );
}
export default LoginPage;
 