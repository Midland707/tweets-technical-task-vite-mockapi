import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h2>My favorite tweets</h2>
    </main>
  );
};

export default HomePage;
