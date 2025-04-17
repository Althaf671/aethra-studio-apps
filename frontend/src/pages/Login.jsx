import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import GoogleButton from "../components/googleButton";


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
    // credential
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

  return (
    <div className=" flex flex-col justify-center items-center mt-20 mb-18">

      <div className="relative px-8 py-7 rounded-3xl text-white justify-center items-center z-100 ">

            {/* Blur background */}
            <div className="absolute inset-0 bg-black/30 blur-sm h-full w-full rounded-3xl"></div>
          
            {/* Login with Email Form */}
            <form className=" flex flex-col mt-3 scale-z-100">
                <h1 className="text-[18.5px] text-center mb-6">Sign In your Account</h1>
                <input 
                  type="text"
                  placeholder="Username"
                  className="outline-none my-[8px] tracking-wider rounded-2xl bg-white/10 py-2 px-4 text-[15px]" />
                <input 
                  type="email"
                  placeholder="Email"
                  className="outline-none my-[8px] tracking-wider rounded-2xl bg-white/10 py-2 px-4 text-[15px]" />
                <input 
                  type="password"
                  placeholder="Password"
                  className="outline-none my-[8px] tracking-wider rounded-2xl bg-white/10 py-2 px-4 text-[15px]" />
            </form>

            <div className="flex w-full max-h-4 justify-between items-center mt-0.5 px-1">
                  {/* Remember me */}
                  <div className="flex justify-center items-center gap-[5px] scale-z-100">
                      <input
                        type="checkbox"
                        className="cursor-pointer" />
                      <label className="text-[10.5px] opacity-80">Remember me</label>
                  </div>
                
                {/* Forget Password */}
                <div className="flex max-w-25 justify-center items-center gap-1 scale-z-100">
                      <label className="text-[8px] underline italic tracking-[0.5px] opacity-80 cursor-pointer hover:opacity-100">Forgot password?</label>
                  </div>
            </div>

            <button className="login-btn w-full border-2 text-white border-white h-[42px] px-10 rounded-[20px] mt-15 tracking-[1.5px] font-semibold scale-z-100 cursor-pointer ">Sign In</button>

            {/* Login with Google */}
            <div id="google-login-btn" className="mt-3.5 mb-4 min-w-55 scale-z-100">
              <GoogleButton />
            </div>

            {/* Register Account */}
            <p className="text-[9px] text-center mb-8">Doesn't have an account? <span className="register-text underline">Register now</span> </p>

      </div>
      
    </div>
)};

export default Login;