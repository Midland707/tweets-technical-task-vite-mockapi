import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/tweets">Tweets</NavLink>
            </li>
          </ul>
        </nav>
      </header>
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
