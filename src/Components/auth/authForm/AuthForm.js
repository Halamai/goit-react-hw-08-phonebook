// import { FormContainer } from "./AuthFormStyled.js";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
// import { HeaderContainer } from "../../header/HeaderStyled.js";

const AuthForm = ({ signUp, signIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const location = useLocation();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    name === "email" && setEmail(value);
    name === "password" && setPassword(value);
    name === "displayName" && setDisplayName(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    location.pathname === "/registration"
      ? signUp({ email, password, displayName })
      : signIn({ email, password });
  };

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        {location.pathname === "/registration" && (
          <label className="label">
            Name
            <input
              className="input"
              placeholder="Enter your name"
              type="text"
              value={displayName}
              onChange={onHandleChange}
              name="displayName"
            />
          </label>
        )}
        <label className="label">
          Email
          <input
            className="input"
            type="text"
            value={email}
            onChange={onHandleChange}
            name="email"
            placeholder="Enter email"
          />
        </label>
        <label className="label">
          Password
          <input
            className="input"
            type="text"
            value={password}
            onChange={onHandleChange}
            name="password"
            placeholder="Enter password"
          />
        </label>
        <button className="title" type="submit">
          {location.pathname === "/registration" ? "Sign up" : "Sign in"}
        </button>
      </form>
    </>
  );
};

export default AuthForm;
