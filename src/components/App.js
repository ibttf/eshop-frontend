import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Item from "../pages/Item";
import Cart from "../pages/Cart";
import config from "../baseUrl.js"
import Test from "./Test";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/App.css";

function App() {
  const [user, setUser] = useState(null);
  const[toggle,setToggle]=useState(false);
  useEffect(() => {

    // auto-login
    fetch(`${config.baseUrl}/logged_in`, {mode: "cors"}).then((r) => {
     r.json().then(results=>{
      console.log(results);
      if(results.logged_in){
        
        setUser(results.user)
      }
      })
     })
    
  }, [,toggle]);

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
            <Item user={user}/>
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
            <NavBar user={user} />
            <button onClick={()=>setToggle(!toggle)}>toggle</button>
            <Home user={user} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
