import React, { Suspense } from "react";
import { Switch } from "react-router";
import PublikRoute from "../../routes/PublikRoute.js";
import PrivateRoute from "../../routes/PrivateRoute.js";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../../redux/auth/authSelectors";
import { mainRoutes } from "../../routes/MainRoutes.js";
import { MainContainer } from "./MainStyled.js";

const Main = () => {
  const isAuth = useSelector(isAuthSelector);
  return (
    <MainContainer>
      <main>
        <Suspense fallback={<h2>...loading</h2>}>
          <Switch>
            {mainRoutes.map(
              ({ path, exact, component, isPrivate, isRestricted }) =>
                isPrivate ? (
                  <PrivateRoute
                    path={path}
                    exact={exact}
                    component={component}
                    isAuth={isAuth}
                    key={path}
                  />
                ) : (
                  <PublikRoute
                    path={path}
                    exact={exact}
                    component={component}
                    isAuth={isAuth}
                    key={path}
                    isRestricted={isRestricted}
                  />
                )
            )}
          </Switch>
        </Suspense>
      </main>
    </MainContainer>
  );
};

export default Main;
