import { Helmet } from "react-helmet";
import { HomeMain, LibraryTitle } from "./HomePage.styled";
import { TweetsList } from "../../components/TweeetsList/TweetsList";

const HomePage = () => {
  return (
    <HomeMain>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <LibraryTitle>Your following tweets</LibraryTitle>
      <TweetsList />
    </HomeMain>
  );
};

export default HomePage;
