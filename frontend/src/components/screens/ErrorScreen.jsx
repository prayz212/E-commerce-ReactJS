import React from "react";
import "./ErrorScreen.css";

const ErrorScreen = ({ error }) => {
  return (
    <div className="error__screen">
      <h1 className="error__title">{error.message ? error.message : "Error 404"}</h1>
      <p className="error__content">
        There is some error occurred related fetching data, please try again
        later.
      </p>
    </div>
  );
};

export default ErrorScreen;
