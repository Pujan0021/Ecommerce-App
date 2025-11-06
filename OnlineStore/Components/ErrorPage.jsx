import React from "react";
import "../Css/Error.css";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="mainContainer">
      <div className="subContainer">
        <img
          src="https://miro.medium.com/1*ZvwdIQkolJ2z1MILFrQjOQ.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ErrorPage;
