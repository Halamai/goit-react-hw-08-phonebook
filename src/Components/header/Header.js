import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../navigation/Navigation.js";
import { HeaderContainer } from "./HeaderStyled.js";
const Header = () => {
  const userEmail = useSelector((state) => state.authorization.user?.email);
  return (
    <HeaderContainer>
      <h2 className="activeNavLink">Phonebook tracker</h2>
      {userEmail && <h3 className="title">{userEmail}</h3>}
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
