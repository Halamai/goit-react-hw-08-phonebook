import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublikRoute = ({ path, exact, component, isAuth, isRestricted }) => {
  return isAuth && isRestricted ? (
    <Redirect to="/contacts" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublikRoute;
