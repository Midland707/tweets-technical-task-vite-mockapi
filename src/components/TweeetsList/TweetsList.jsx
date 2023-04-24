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
  const [pages, setPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [usersFollow, setUsersFollow] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        setPages(res.data.length);
      })
      .catch((error) => {
        console.error(error.message);
      });

    const userStorage = localStorage.getItem("followUsers");
    const parsedUsers = JSON.parse(userStorage);
    if (parsedUsers) {
      setUsersFollow(parsedUsers);
    }
  }, []);

  useEffect(() => {
    if (page !== 1) setIsLoading(true);
    getUsers(page)
      .then((res) => {
        setUsers([...users, ...res.data]);
        setShowBtn(true);
        setIsLoading(false);
        if (pages) setShowBtn(page < Math.ceil(pages / 3));
      })
      .catch((error) => console.error(error.message));
  }, [page]);

  // useEffect(() => {}, [usersFollow]);

  const saveUsers = (id, user, followers) => {
    const usersArr = users;
    const index = usersArr.findIndex((user) => user.id === id);
    usersArr[index].followers = followers;
    setUsers(usersArr);
    // changeUser(id, user);
    console.log("usersFollow = ", usersFollow);
    localStorage.setItem("followUsers", JSON.stringify(usersFollow));
  };

  const followOnClick = (id, user) => {
    if (!usersFollow.find((user) => user.id === id)) {
      console.log("ДОДАЮ - ", user.user);
      user.followers = user.followers + 1;
      setUsersFollow([...usersFollow, user]);
      saveUsers(id, user, user.followers);
      return;
    }
    user.followers = user.followers - 1;
    console.log("віднімаю - ", user.user);
    const removedUser = usersFollow;
    setUsersFollow(removedUser.filter((user) => user.user !== user.user));
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
