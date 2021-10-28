import React from "react";
import { Spinner } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../hooks/UseAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <Spinner
        className="service-detail-loader"
        animation="border"
        variant="primary"
      />
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: location } }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
