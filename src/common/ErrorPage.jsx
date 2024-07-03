import React from "react";
import Header from "./header";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header as="h1" title="Error: 404 Page not found ;-(" />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Main Page
      </button>
    </>
  );
};
export default ErrorPage;
