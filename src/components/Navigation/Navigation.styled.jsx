import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  margin-left: auto;
  margin-right: auto;
  height: 50px;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-decoration: none;
  padding: 10px;
  color: #ebd8ff;
  text-transform: uppercase;

  &.active {
    color: #5cd3a8;
  }
  &:hover,
  &:focus {
    color: #5cd3a8;
  }
`;
