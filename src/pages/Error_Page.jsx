import React from "react";
import { useNavigate } from "react-router-dom";

const Error_Page = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Something went wrong in the application.</h2>
      <p>
        The page you're trying to access doesn't exist or an error occurred.
      </p>
      <button
        onClick={() => navigate("/")}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem", cursor: "pointer" }}
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default Error_Page;
