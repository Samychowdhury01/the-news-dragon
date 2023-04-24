import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

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
    </div>
  );
};

export default RightNav;
<h1>Right Nav</h1>;
