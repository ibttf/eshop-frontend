import React from 'react';
const Test = () => {
    function handleLoggedInClick(){
        fetch(`/logged_in`).then((r) => {
            r.json().then(results=>{
             console.log(results);
             })
            })
    }
    function handleSignupClick(){

        fetch(`/signup`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({user: {
                "username": "newroy6",
                "password": "newpass",
                password_confirmation: "newpass",
      
            }}),
          })
            .then((r) => {
            if (r.ok) {
              console.log(r.json(), "successfully created account and logged in apparently")
            } else {
              console.log("error creating account");
            }
          })
    }
    function handleLoginClick(){
        fetch(`/login`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({user: {
                "username": "newroy6",
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
        fetch(`/logout`, { method: "DELETE"}).then((r) => {
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
