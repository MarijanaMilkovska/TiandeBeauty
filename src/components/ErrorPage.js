import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="ErrorPage text-center">
      <h1>Error 404</h1>
      <p>
        You reached a dead end. Go back to the{" "}
        <Link to="/" className="link">
          Homepage
        </Link>{" "}
      </p>
    </div>
  );
};

export default ErrorPage;
