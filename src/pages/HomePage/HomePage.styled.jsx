import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: #d9acc9;
`;

export const LibraryTitle = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin: 0;
  margin-top: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  padding: 10px;
  color: black;
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: #5cd3a8;
  }
`;
