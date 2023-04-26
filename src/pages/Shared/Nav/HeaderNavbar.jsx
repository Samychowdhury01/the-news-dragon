import React from "react";
import Container from "react-bootstrap/Container";
import HeaderNav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserCircle } from "react-icons/fa";

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
              <HeaderNav.Link href="#deets">
               <FaUserCircle className="icon-size"/>
              </HeaderNav.Link>
              <HeaderNav.Link eventKey={2} href="#memes" className="btn btn-dark text-white fw-bold px-4">
               Login
              </HeaderNav.Link>
            </HeaderNav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNavbar;
