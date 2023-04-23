import { useEffect, useState } from "react";
import { TweetItem } from "../TweetItem/TweetItem";
import { List } from "./TweetsList.styled";
import { getUsers } from "../../service/operation";

export const TweetsList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const followOnClick = (id) => {
    console.log("id = ", id);
  };

  return (
    <List>
      {users.map((user) => (
        <TweetItem key={user.id} user={user} handelOnClick={followOnClick} />
      ))}
    </List>
  );
};
