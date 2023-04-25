import { useState } from "react";

// import background from "../styles/hero-background.png";

import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { useHistory, Link } from "react-router-dom";

import "../styles/Login.css";
function Login({ onLogin }) {
  const history = useHistory();
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login">
      <div className="login-left">
        {/* <img src={background} className="hero-background"></img> */}
      </div>
      <div className="login-right">


        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            <div />
            <p className="small-text">
              Don't have an account? &nbsp;
              <button
                onClick={() => {
                  setShowLogin(false);
                }}
              >
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <>
            <SignUpForm onLogin={onLogin} />
            <div />
            <p className="small-text">
              Already have an account? &nbsp;
              <button
                onClick={() => {
                  setShowLogin(true);
                }}
              >
                Log In
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
