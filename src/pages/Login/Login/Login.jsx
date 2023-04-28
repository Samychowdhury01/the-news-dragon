import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <Form className="bg-white p-5">
        <h3 className="text-center fw-bold text-dark mb-5 pb-3">
          Login your account
        </h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="dark" type="submit" className="w-100 mb-4">
          Login
        </Button>
        <br />
       <div className="text-center">
       <Form.Text className="text-secondary">
          Don't Have an Account? <Link to="/register" className="text-danger">Register</Link>
        </Form.Text>
       </div>
        <Form.Text className="text-success">

        </Form.Text>
        <Form.Text className="text-danger">

        </Form.Text>
      </Form>
    </div>
  );
};

export default Login;
