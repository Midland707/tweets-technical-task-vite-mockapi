import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <h1>Tweets</h1>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/tweets">Tweets</NavLink>
        </li>
      </ul>
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
