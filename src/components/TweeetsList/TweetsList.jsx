import { useEffect, useState } from "react";
import { TweetItem } from "../TweetItem/TweetItem";
import { List, LoadButton } from "./TweetsList.styled";
import { getUsers, getAllUsers, changeUser } from "../../service/operation";
import { Loader } from "../Loader/Loader";

import * as Scroll from "react-scroll";
var scroll = Scroll.animateScroll;

export const TweetsList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  let followingUsersArr = [];

  const loadFromStorage = () => {
    const userStorage = localStorage.getItem("followingUsers");
    const parsedUsers = JSON.parse(userStorage);
    if (parsedUsers) {
      followingUsersArr = parsedUsers;
    }
  };

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        setTotalPages(res.data.length);
      })
      .catch((error) => {
        console.error(error.message);
      });
    loadFromStorage();
  }, []);

  useEffect(() => {
    if (page !== 1) setIsLoading(true);
    getUsers(page)
      .then((res) => {
        setUsers([...users, ...res.data]);
        setShowBtn(true);
        setIsLoading(false);
        if (totalPages) setShowBtn(page < Math.ceil(totalPages / 3));
      })
      .catch((error) => console.error(error.message));
  }, [page]);

  const saveUsers = (id, user, followers) => {
    const usersArr = [...users];
    usersArr[id - 1].followers = followers;
    setUsers(usersArr);
    // changeUser(id, user);
    localStorage.setItem("followingUsers", JSON.stringify(followingUsersArr));
  };

  const followOnClick = (id, user) => {
    loadFromStorage();
    if (!followingUsersArr.find((user) => user.id === id)) {
      user.followers = user.followers + 1;
      followingUsersArr = [...followingUsersArr, user];
      saveUsers(id, user, user.followers);
      return;
    }
    user.followers = user.followers - 1;
    followingUsersArr = followingUsersArr.filter((user) => user.id !== id);
    saveUsers(id, user, user.followers);
  };

  const OnClickLoadMore = () => {
    setPage(page + 1);
    scroll.scrollToBottom();
  };

  return (
    <>
      <List>
        {users.map((user) => (
          <TweetItem key={user.id} user={user} handelOnClick={followOnClick} />
        ))}
      </List>
      {isLoading && <Loader />}
      {showBtn && <LoadButton onClick={OnClickLoadMore}>Load More</LoadButton>}
    </>
  );
};
