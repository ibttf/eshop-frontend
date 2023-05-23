import { useState } from "react";

// import background from "../styles/hero-background.png";

import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { useHistory } from "react-router-dom";

import "../styles/Login.css";
function Login({ onLogin }) {
  const history = useHistory();
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login">


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
  );
}

export default Login;
