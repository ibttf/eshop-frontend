import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Item from "../pages/Item";
import Cart from "../pages/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch(`/logged_in`).then((r) => {
     r.json().then(results=>{
      if(results.logged_in){
        
        setUser(results.user)
      }
      })
     })
    
  }, []);

  return (
    <>
      <main>
        <Switch>
   
          <Route path="/login">
            <NavBar user={user} setUser={setUser} isSignup={false}/>
            <Login onLogin={setUser} />
          </Route>
          <Route path="/create-account">
            <NavBar user={user} setUser={setUser} isSignup={true}/>
            <Login onLogin={setUser} />
          </Route>
          <Route path="/cart">
            <NavBar user={user} setUser={setUser} />
            <Cart user={user} onLogin={setUser} />
          </Route>
          <Route path="/products/:id">
            <NavBar user={user} setUser={setUser} />
            <Item />
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
