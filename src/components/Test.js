import React from 'react';
import config from '../baseUrl';
const Test = () => {
    function handleLoggedInClick(){
        fetch(`${config.baseUrl}/logged_in`).then((r) => {
            r.json().then(results=>{
             console.log(results);
             })
            })
    }
    function handleSignupClick(){

        fetch(`${config.baseUrl}/signup`, {
            method: 'POST',
            mode: "cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(
              {"user": 
                {
                  "username": "newroy2",
                  "password": "newpass",
                  "password_confirmation": "newpass",
                 }}),
          }).catch((error)=>console.log(error))
            .then((r) => {
            if (r.ok) {
              console.log(r.json(), "successfully created account and logged in apparently")
            } else {
              console.log("error creating account");
            }
          })
    }
    function handleLoginClick(){
        fetch(`${config.baseUrl}/login`, {
            method: 'POST',
            mode: "cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({user: {
                "username": "newroy2",
                "password": "newpass"
      
            }}),
          })
            .then((r) => {
            if (r.ok) {
              console.log(r.json(), "successfully logged in apparently")
            } else {
              console.log("error signing in");
            }
          })
    }
    function handleSignoutClick(){
        fetch(`${config.baseUrl}/logout`, {
          method: "DELETE",
          mode: "cors"
        }).then((r) => {
            if (r.ok) {
               console.log(r.json())
            }
          })
    }
    return (
        <div>
            <button onClick={()=>handleLoggedInClick()}>am i logged in</button>
            <button onClick={()=>handleLoginClick()}>login</button>
            <button onClick={()=>handleSignupClick()}>signup</button>
            <button onClick={()=>handleSignoutClick()}>signout</button>
        </div>
    );
}

export default Test;
