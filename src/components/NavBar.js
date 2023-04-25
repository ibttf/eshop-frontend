import React from "react";
import { Link } from "react-router-dom";
import logo from "../styles/logo-no-background.png";
import "../styles/Navbar.css";

//bootstrap stuff
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//fontawesome 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faUser
} from "@fortawesome/free-solid-svg-icons";


function NavBar({ user, setUser }) {
    function handleLogoutClick() {
    fetch(`/logout`, { method: "DELETE"}).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    })};
    function NavDropdownTitle(){
      {
        const navDropdownIcon=<FontAwesomeIcon icon={faUser} className="navbar-icon"></FontAwesomeIcon>
        if (user){
          return (
            //if logged in
            <NavDropdown title= {navDropdownIcon} id="basic-nav-dropdown" renderMenuOnMount={true} className="nav-dropdown-container">
              <NavDropdown.Item className="navbar-dropdown-text">
                <Link to="/" className="navbar-dropdown-link">Signout</Link>
              </NavDropdown.Item>

            </NavDropdown>
          )
        }
        return (
          //if not logged in
          <NavDropdown title= {navDropdownIcon} id="basic-nav-dropdown" renderMenuOnMount={true} className="nav-dropdown-container">

              <NavDropdown.Item className="navbar-dropdown-text">
                <Link to="/login" className="navbar-dropdown-link">Login</Link>
              </NavDropdown.Item>


            <NavDropdown.Divider />
            <NavDropdown.Item className="navbar-dropdown-text">
              <Link to="/create-account" className="navbar-dropdown-link">Create Account</Link>
            </NavDropdown.Item>

        </NavDropdown>
          )
        }
    } 


    if (user) {
        return (
       <Navbar bg="light" expand="lg" className="navbar">
      <Container>

        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="top-page-img"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/review" className="navbar-btn">Review</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/new"  className="navbar-btn">Submit</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/my-essays"  className="navbar-btn">My Essays</Link>
            </Nav.Link>
            <Nav.Link onClick={handleLogoutClick}> 
              <Link to="/"  className="navbar-btn">Logout</Link>
            </Nav.Link>
            
          </Nav>
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
            <FontAwesomeIcon icon={faCartShopping} className="navbar-icon"/>
          </Navbar.Text>
          
          {NavDropdownTitle()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  
}
 

export default NavBar;
