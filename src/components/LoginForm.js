import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/LoginForm.css";

function LoginForm({ onLogin }) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({user: {
      username,
      password
    }});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch(`/login`,requestOptions)
    .then((r) => {
      setIsLoading(false);
      r.json().then(results=>{
        if (results.status===401){
          //if login failed
          setErrors(results.errors)
        }else{
          //successfully logged in
          onLogin(results.user);
          history.push("/")
        }
      })
    });
  }

  return (
    <div className="login-form">
      <h1>Welcome back</h1>
      <h2>Welcome back! Please enter your details.</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="username"
          value={username}
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter Your Password"
          id="password"
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">{isLoading ? "Loading..." : "Sign In"}</button>

        <div className="errors">
          {errors ? (
            errors.map((err) => <div key={err}>Oops! {err}</div>)
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
