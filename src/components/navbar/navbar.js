import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faSearch,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "./navbar.css";
function NavBar() {
   const [fixnav, setfixnav] = useState(false)
   const setfixed =() => {
     if (window.scrollY >= 10) {
      setfixnav(true)
     }else{
      setfixnav(false)
     }
   }
   window.addEventListener("scroll",setfixed);
  return (
    <Navbar className={fixnav ? "fixedclass" : "navbar"} expand="lg" id="navbar">
      <Container>
        <Navbar.Brand className="d-flex" to='/'>
        <img className="d-inline-block" src="assets/img/gallery/logo.png" alt="logo" />
        <sapn className="text-1000 fs-0 fw-bold ms-2">Majestic</sapn>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link duration={500}  to="header" className="navlink">home</Link>
            <NavLink className="navlink" to="/shop">shop</NavLink>
            <Link className="navlink" to="explore-collection">Collection</Link>
            <Link className="navlink" to="outlet">Outlet</Link>
          </Nav>
          <Nav className="ms-auto">
            <div className="d-flex">
              <FontAwesomeIcon className="icon" icon={faPhone} />
              <FontAwesomeIcon className="icon" icon={faSearch} />
              <FontAwesomeIcon className="icon" icon={faCartShopping} />
              <FontAwesomeIcon className="icon" icon={faUser} />
              <FontAwesomeIcon className="icon" icon={faHeart} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
