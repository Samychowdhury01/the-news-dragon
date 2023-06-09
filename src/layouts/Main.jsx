import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import HeaderNavbar from "../pages/Shared/Nav/HeaderNavbar";
import RightNav from "../pages/Shared/RightNav/RightNav";

const Main = () => {
  return (
    <>
      <Header />
      <HeaderNavbar/>
      <Container>
        <Row className="mt-5 pt-5">
          <Col lg={3}>
            <LeftNav/>
          </Col>
          <Col lg={6}>
            <Outlet/>
          </Col>
          <Col lg={3}>
            <RightNav/>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Main;
