import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Home from "../pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch(`/logged-in`).then((r) => {
      if (r.ok) {
        r.json().then((user) =>setUser(user));
      }
    })
  }, []);

  return (
    <>
      <main>
        <Switch>
   
          <Route path="/login">
            <NavBar user={user} setUser={setUser} />
            <Login onLogin={setUser} />
          </Route>

          <Route path="/">
            <NavBar user={user} />
            <Home user={user} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
