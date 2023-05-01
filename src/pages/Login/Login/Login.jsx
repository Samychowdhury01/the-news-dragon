import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()
  const location = useLocation()
  console.log('location from login', location)
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setErrorMessage("");

    signIn(email, password)
     // sign-in existing user
     signIn(email, password)
     .then((result) => {
       const loggedUser = result.user;
       toast.success("Login successful");
       event.target.reset();
       navigate(location?.state?.from?.pathname ||'/category/0')
     })
     .catch((error) => {
        toast.error("Something went wrong. try again.");
     });
  };

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <Form onSubmit={handleLogin} className="bg-white p-5">
        <h3 className="text-center fw-bold text-dark mb-5 pb-3">
          Login your account
        </h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
          <Form.Text className="text-danger">{errorMessage}</Form.Text>
        </Form.Group>
        <Button variant="dark" type="submit" className="w-100 mb-4">
          Login
        </Button>
        <br />
        <div className="text-center">
          <Form.Text className="text-secondary">
            Don't Have an Account?{" "}
            <Link to="/register" className="text-danger">
              Register
            </Link>
          </Form.Text>
        </div>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </div>
  );
};

export default Login;
