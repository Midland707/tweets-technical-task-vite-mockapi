import { Helmet } from "react-helmet";
import { GoBackButton, TweetsMain } from "./TweetsPage.styled";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { TweetsList } from "../../components/TweeetsList/TweetsList";
const TweetsPage = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");

  return (
    <TweetsMain>
      <Helmet>
        <title>Tweets</title>
      </Helmet>
      <GoBackButton to={backLinkRef.current}>Go back</GoBackButton>
      <TweetsList />
    </TweetsMain>
  );
};

export default TweetsPage;
