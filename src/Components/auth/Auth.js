import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { signUpError } from "../../redux/auth/authActions";
// import { signUpError } from "../../redux/auth/authActions";
import {
  signInOperation,
  signUpOperation,
} from "../../redux/auth/authOperations";
import { errorSelector, loaderSelector } from "../../redux/auth/authSelectors";
import AuthForm from "./authForm/AuthForm";

const Auth = () => {
  const dispatch = useDispatch();
  const error = useSelector(errorSelector);
  const loader = useSelector(loaderSelector);
  const location = useLocation();
  const signUp = (user) => dispatch(signUpOperation(user));
  const signIn = (user) => dispatch(signInOperation(user));
  const resetError = useCallback(() => dispatch(signUpError("")), [dispatch]);

  useEffect(() => {
    resetError();
  }, [location, resetError]);
  return (
    <>
      <AuthForm signUp={signUp} signIn={signIn} />
      {error && <h2>{error}</h2>}
      {loader && <h2>...loading</h2>}
    </>
  );
};

export default Auth;
