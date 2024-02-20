import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ children, isLoggedIn, ...props }) {
  return (
    <Route {...props}>{isLoggedIn ? children : <Redirect to={"/"} />}</Route>
  );
}

export default ProtectedRoute;
