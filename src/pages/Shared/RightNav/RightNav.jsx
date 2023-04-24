import React from "react";
import { ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <div>
        <h5 className="fw-bold">Login with</h5>
        <button className="btn btn-outline-primary mb-2">
          <FaGoogle className="me-2" />
          login with Google
        </button>
        <button className="btn btn-outline-secondary">
          <FaGithub className="me-2" />
          login with Google
        </button>
      </div>
      <div>
        <h4 className="mt-4">Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebookSquare className="me-2 fs-2" />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitterSquare className="me-2 fs-2" />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram className="me-2 fs-2" />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone/>
      <div className='position-relative'>
                <img src={bg} alt="" />
                <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                    <h3 className='fw-bold'>Create an Amazing Newspaper</h3>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className='btn btn-danger'>Learn More</button>
                </div>
            </div>
    </div>
  );
};

export default RightNav;
<h1>Right Nav</h1>;
