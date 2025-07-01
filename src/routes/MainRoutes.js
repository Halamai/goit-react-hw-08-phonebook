import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName:"HomePage" */)
    ),
    isRestricted: false,
    isPrivate: false,
  },
  {
    name: "Phonebook",
    path: "/contacts",
    exact: true,
    component: lazy(() =>
      import("../pages/PhonePage" /* webpackChunkName:"PhonesPage" */)
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "Sing Up",
    path: "/registration",
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /* webpackChunkName:"AuthPage" */)
    ),
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "Sign in",
    path: "/login",
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /* webpackChunkName:"AuthPage" */)
    ),
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "Contact",
    path: "/contact",
    exact: true,
    component: lazy(() =>
      import("../pages/ContactPage" /* webpackChunkName:"ContactPage" */)
    ),
    isPrivate: false,
    isRestricted: false,
  },
];
