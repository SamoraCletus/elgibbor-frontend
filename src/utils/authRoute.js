import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./auth";

export const LoginRoute = ({ component: Component, ...rest }) => {
  const { admin } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        admin ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
