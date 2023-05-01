import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import HeaderNav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { toast } from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const HeaderNavbar = () => {
  const {user, logOut} = useContext(AuthContext)


const handleLogout =()=>{
  logOut()
  .then(result =>{
      toast.success("Logout Successful.")
  })
  .catch(error =>{
    toast.error("something is wrong. Try again")
  })
}

  return (
    <div className="bg-transparent">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="transparent"
        variant="transparent"
        className="pt-3"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="d-flex align-items-center">
                <FaUserCircle className="icon-size" />
              </Nav.Link>
              <Nav.Link eventKey={2}>
                {
                  user ? <button onClick={handleLogout} className="btn btn-dark text-white fw-bold px-4">Logout</button> : <Link to="/login" className="btn btn-dark text-white fw-bold px-4">
                  Login
                </Link>
                }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNavbar;

