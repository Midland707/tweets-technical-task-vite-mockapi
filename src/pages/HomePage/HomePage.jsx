import { Helmet } from "react-helmet";
import { HomeMain } from "./HomePage.styled";
import { TweetsList } from "../../components/TweeetsList/TweetsList";

const HomePage = () => {
  return (
    <HomeMain>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h2>My following tweets</h2>
      <TweetsList />
    </HomeMain>
  );
};

export default HomePage;
