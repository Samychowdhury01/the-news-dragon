import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="mt-5 pt-5">
          <Col lg={3}>
            <LeftNav/>
          </Col>
          <Col lg={6}>
            <h2>Main Content coming...</h2>
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
