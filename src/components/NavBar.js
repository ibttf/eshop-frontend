import React from "react";
import { Link } from "react-router-dom";
import logo from "../styles/logo-no-background.png";
import "../styles/Navbar.css";
import config from "../baseUrl.js"

//bootstrap stuff
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//fontawesome 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faUser,
    faUserPlus,
    faUserMinus
} from "@fortawesome/free-solid-svg-icons";


function NavBar({ user, setUser }) {
    function handleLogoutClick() {
    fetch(`${config.baseUrl}/logout`, { method: "DELETE", mode: "cors"
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    })
    window.location.reload();
    };
    function NavDropdownTitle(){
      {
        const navDropdownIcon=<FontAwesomeIcon icon={faUser} className="navbar-icon"></FontAwesomeIcon>
        if (user){
          return (
            //if logged in
            <NavDropdown title= {navDropdownIcon} id="basic-nav-dropdown" renderMenuOnMount={true} className="nav-dropdown-container">
              <NavDropdown.Item className="navbar-dropdown-text">
                <Link to="/" className="navbar-dropdown-link" onClick={()=>{
                  handleLogoutClick();
                  
                  }}><FontAwesomeIcon icon={faUserMinus} className="navbar-dropdown-icon"></FontAwesomeIcon>Signout</Link>
              </NavDropdown.Item>

            </NavDropdown>
          )
        }
        return (
          //if not logged in
          <NavDropdown title= {navDropdownIcon} id="basic-nav-dropdown" renderMenuOnMount={true} className="nav-dropdown-container">

              <NavDropdown.Item className="navbar-dropdown-text">
                <Link to="/login" className="navbar-dropdown-link"><FontAwesomeIcon icon={faUser} className="navbar-dropdown-icon"></FontAwesomeIcon>Login</Link>
              </NavDropdown.Item>


            <NavDropdown.Item className="navbar-dropdown-text">
              <Link to="/create-account" className="navbar-dropdown-link"><FontAwesomeIcon icon={faUserPlus} className="navbar-dropdown-icon"></FontAwesomeIcon>Create Account</Link>
            </NavDropdown.Item>

        </NavDropdown>
          )
        }
    } 


    if (user) {
        return (
          <Navbar bg="light" expand="lg" className="navbar-container">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} className="top-page-img"></img>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
              <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} className="navbar-icon"/>
              </Link>
    
              </Navbar.Text>
              
              {NavDropdownTitle()}
            </Navbar.Collapse>
          </Container>
        </Navbar>

    )
    } 
      return (
       <Navbar bg="light" expand="lg" className="navbar-container">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="top-page-img"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} className="navbar-icon"/>
          </Link>

          </Navbar.Text>
          
          {NavDropdownTitle()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  
}
 

export default NavBar;
