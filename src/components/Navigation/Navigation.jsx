import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
  Header,
  Nav,
  NavList,
  NavItem,
  StyledNavLink,
} from "./Navigation.styled";
import { Loader } from "../Loader/Loader";

const Navigation = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavList>
            <NavItem>
              <StyledNavLink to="/">Home</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/tweets">Tweets</StyledNavLink>
            </NavItem>
          </NavList>
        </Nav>
      </Header>
      <Suspense
        fallback={
          <div>
            <Loader />
            Loading page...
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Navigation;
