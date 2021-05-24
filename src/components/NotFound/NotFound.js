import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Jumbotron>
        <h1>404 Error!</h1>
        <p>Page Not Found</p>
        <p>
          <Link to="/">
            <Button variant="primary">Back to Home Page</Button>
          </Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default NotFound;
