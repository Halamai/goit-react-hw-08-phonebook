import React from "react";
import { NavLink } from "react-router-dom";
const NavigatioonItem = ({
  name,
  path,
  exact,
  isRestricted,
  isPrivate,
  isAuth,
}) => {
  return (
    <>
      {!isPrivate && !isRestricted && (
        <li className="navItem">
          <NavLink
            to={path}
            exact={exact}
            className="navLink"
            activeClassName="activeNavLink"
          >
            {name}
          </NavLink>
        </li>
      )}
      {isPrivate && !isRestricted && isAuth && (
        <li className="navItem">
          <NavLink
            to={path}
            exact={exact}
            className="navLink"
            activeClassName="activeNavLink"
          >
            {name}
          </NavLink>
        </li>
      )}
      {!isPrivate && isRestricted && !isAuth && (
        <li className="navItem">
          <NavLink
            to={path}
            exact={exact}
            className="navLink"
            activeClassName="activeNavLink"
          >
            {name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigatioonItem;
