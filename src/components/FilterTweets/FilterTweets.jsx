import { useEffect, useState } from "react";
import { TweetItem } from "../TweetItem/TweetItem";
import { List } from "./FilterTweets.styled";

export const FilterTweets = () => {
  const [users, setUsers] = useState([]);
  return (
    <List>
      <TweetItem />
    </List>
  );
};
