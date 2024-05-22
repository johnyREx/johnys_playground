import React, { useState } from "react";
import "../../App.css";
import logo from "../../smartstudent logo.png";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";

const HomePage = () => {
  const [type, setType] = useState("signIn");

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };

  const containerClass = "container " + (type === "signUp" ? "right-panel-active" : "");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="SmartStudent Logo" />
        <h1>Welcome to SmartStudent</h1>
      </header>
      <h2>Login in to Access Full Dashboard</h2>
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={() => handleOnClick("signIn")}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, SmartStudent!</h1>
              <p>Enter your personal details and get Connected with other Smart Students</p>
              <button className="ghost" id="signUp" onClick={() => handleOnClick("signUp")}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="App-footer">
        <p>Copyright 2024 - SmartStudent made by ALX students</p>
      </footer>
    </div>
  );
};

export default HomePage;
