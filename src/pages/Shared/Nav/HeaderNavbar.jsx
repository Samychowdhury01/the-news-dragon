import React from "react";
import Container from "react-bootstrap/Container";
import HeaderNav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderNavbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="mt-3">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <HeaderNav className="mx-auto">
              <HeaderNav.Link href='/'>Home</HeaderNav.Link>
              <HeaderNav.Link href="#pricing">About</HeaderNav.Link>
              <HeaderNav.Link href="#pricing">Career</HeaderNav.Link>
            </HeaderNav>
            <HeaderNav>
              <HeaderNav.Link href="#deets" className="d-flex align-items-center">
               <FaUserCircle className="icon-size"/>
              </HeaderNav.Link>
              <HeaderNav.Link eventKey={2}>
                <Link className="btn btn-dark text-white fw-bold px-4">Login</Link>
              </HeaderNav.Link>
            </HeaderNav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNavbar;
