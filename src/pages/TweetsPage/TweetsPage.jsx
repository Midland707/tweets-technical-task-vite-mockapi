import { Helmet } from "react-helmet";
import { TweetsList } from "../../components/TweeetsList/TweetsList";

const TweetsPage = () => {
  return (
    <>
      <Helmet>
        <title>Tweets</title>
      </Helmet>
      Tweets
      <TweetsList />
    </>
  );
};

export default TweetsPage;
