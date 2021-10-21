import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavigatioonItem from "./NavigatioonItem";
import { signOutSuccess } from "../../redux/auth/authActions";
import { NavigationContainer } from "./NavigationStyled";
import { mainRoutes } from "../../routes/MainRoutes";
import { isAuthSelector } from "../../redux/auth/authSelectors";

const Navigation = ({ routes = mainRoutes }) => {
  const isAuth = useSelector(isAuthSelector);
  const dispatch = useDispatch();
  const signOut = () => dispatch(signOutSuccess());
  return (
    <NavigationContainer>
      <ul className="navList">
        {routes.map(({ name, path, exact, isPrivate, isRestricted }) => (
          <NavigatioonItem
            key={path}
            name={name}
            path={path}
            exact={exact}
            isPrivate={isPrivate}
            isRestricted={isRestricted}
            isAuth={isAuth}
          />
        ))}

        {isAuth && (
          <li className="navLink" onClick={signOut}>
            <span>Sign Out</span>
          </li>
        )}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
