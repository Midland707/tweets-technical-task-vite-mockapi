import { Helmet } from "react-helmet";
import { HomeMain, LibraryTitle, StyledNavLink } from "./HomePage.styled";
import { TweetsList } from "../../components/TweeetsList/TweetsList";

const HomePage = () => {
  return (
    <HomeMain>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <LibraryTitle>
        Your following tweets
        <StyledNavLink to="/tweets">
          {"  "}
          {">>"} Go to Tweets {">>"}
        </StyledNavLink>
      </LibraryTitle>
      <TweetsList />
    </HomeMain>
  );
};

export default HomePage;
