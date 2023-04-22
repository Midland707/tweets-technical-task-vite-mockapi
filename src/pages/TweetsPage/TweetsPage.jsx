import { Helmet } from "react-helmet";
import { GoBackButton } from "./TweetsPage.styled";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { TweetsList } from "../../components/TweeetsList/TweetsList";
import { FilterTweets } from "../../components/FilterTweets/FilterTweets";
const TweetsPage = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");

  return (
    <main>
      <Helmet>
        <title>Tweets</title>
      </Helmet>
      <GoBackButton to={backLinkRef.current}>Go back</GoBackButton>
      <FilterTweets />
      Tweets
      <TweetsList />
    </main>
  );
};

export default TweetsPage;
