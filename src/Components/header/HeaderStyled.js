import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 60px;
  width: 100%;
  background-color: #3a3a3a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  border-bottom: 1px solid #5fa15f;
  .title {
    color: #5fa15f;
  }

  .activeNavLink {
    color: #5fa15f;
    cursor: pointer;
  }
`;
