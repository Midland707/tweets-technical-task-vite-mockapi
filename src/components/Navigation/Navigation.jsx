import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  Header,
  Nav,
  NavList,
  NavItem,
  StyledNavLink,
} from "./Navigation.styled";

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
            {/* <Progress hasStripe value={64} /> */}
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
