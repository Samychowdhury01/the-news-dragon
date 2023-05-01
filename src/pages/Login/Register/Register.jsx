import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { createUser, validateUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const checkbox = form.accept.value;

    setErrorMessage("");
    if (!/(?=.*[A-Z])/.test(password)) {
      setErrorMessage("add at least one UPPERCASE");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setErrorMessage("add at least one special character");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setErrorMessage("add at least two Number");
      return;
    } else if (password.length < 6) {
      setErrorMessage("your password should be 6 character or longer");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        toast.success("you have successfully created an account");
        handleValidation();
        event.target.reset();
      })
      .catch((error) => {
        toast.error("Something went wrong. try again.")
        console.log(error.message);
      });
  };

  // handle validation
  const handleValidation = () => {
    validateUser()
      .then((result) => {
        toast.success("please check your email to verify your email");
      })
      .then((error) => {
        toast.error(`${error.message}`);
      });
  };

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <Form onSubmit={handleRegister} className="bg-white p-5">
        <h3 className="text-center fw-bold text-dark mb-5 pb-3">
          Register your account
        </h3>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="fw-bold">Name</Form.Label>
          <Form.Control type="name" name="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label className="fw-bold">Photo</Form.Label>
          <Form.Control type="file" name="photo" placeholder="Enter photo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Form.Text className="text-danger">{errorMessage}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="accept"
            label="Accept Term & Conditions"
          />
        </Form.Group>
        <Button variant="dark" type="submit" className="w-100 mb-4">
          Register
        </Button>
        <br />
        <div className="text-center">
          <Form.Text className="text-secondary">
            Don't Have an Account?
            <Link to="/login" className="text-danger">
              Login
            </Link>
          </Form.Text>
        </div>
      </Form>
    </div>
  );
};

export default Register;
