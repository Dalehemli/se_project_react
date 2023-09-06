import React from "react";
import { Route, useNavigate } from "react-router-dom";

function ProtectedRoute({ children, isLoggedIn, ...props }) {
  return (
    <Route {...props}>
      {isLoggedIn ? children : <useNavigate to={"/login"} />}
    </Route>
  );
}

export default ProtectedRoute;
