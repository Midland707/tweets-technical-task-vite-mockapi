import { Helmet } from "react-helmet";
import { HomeMain } from "./HomePage.styled";

const HomePage = () => {
  return (
    <HomeMain>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h2>My favorite tweets</h2>
    </HomeMain>
  );
};

export default HomePage;
