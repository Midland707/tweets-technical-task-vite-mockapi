import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Navigation = lazy(() => import("../Navigation/Navigation"));
const Home = lazy(() => import("../../pages/HomePage/HomePage"));
const Tweets = lazy(() => import("../../pages/TweetsPage/TweetsPage"));

function App() {
  return (
    <Suspense
      fallback={
        <div>
          {/* <Progress hasStripe value={64} /> */}
          Loading page...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
