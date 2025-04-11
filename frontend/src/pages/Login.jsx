import React from "react";
import { useEffect } from "react";
import axios from "axios";

const Login = () => {
    
  useEffect(() => {
    /* global google */
    window.google.accounts.id.initialize({
      client_id: "211248872690-s446l5namtkm1aaooeifpg2j9mf2ckhj.apps.googleusercontent.com", 
      callback: handleCredentialResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("google-login-btn"),
      { theme: "outline", size: "large" }
    );
  }, []);

  const handleCredentialResponse = async (response) => {
    // 👉 Ini dia credential-nya
    const credential = response.credential;

    try {
      const res = await axios.post("http://localhost:5000/api/auth/google", {
        credential: credential,
      }, { withCredentials: true });

      console.log("Logged in user:", res.data);
    } catch (err) {
      console.error("Google auth error", err.response?.data || err.message);
    }
  };

  return <div id="google-login-btn"></div>;
};

export default Login;