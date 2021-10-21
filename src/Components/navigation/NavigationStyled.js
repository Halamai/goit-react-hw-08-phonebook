import styled from "styled-components";

export const NavigationContainer = styled.nav`
  .navList {
    list-style: none;
    display: flex;
    align-items: center;
    margin-right: 60px;
  }
  .navItem:not(:last-child) {
    margin-right: 20px;
  }
  .navLink {
    text-decoration: none;
    text-transform: uppercase;
    color: #daa67b;
  }
  .activeNavLink {
    color: #5fa15f;
    cursor: pointer;
  }
`;
