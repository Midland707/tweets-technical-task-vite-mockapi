import { useEffect, useState } from "react";
import { TweetItem } from "../TweetItem/TweetItem";
import { List, LoadButton } from "./TweetsList.styled";
import { getUsers, getAllUsers, changeUser } from "../../service/operation";
import { Loader } from "../Loader/Loader";
import { FilterTweets } from "../FilterTweets/FilterTweets";

import * as Scroll from "react-scroll";
var scroll = Scroll.animateScroll;

export const TweetsList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("show all");

  let ArrFollowId = [];
  const loadFromStorage = () => {
    const userStorage = localStorage.getItem("followingUsers");
    const parsedUsers = JSON.parse(userStorage);
    if (parsedUsers) {
      ArrFollowId = parsedUsers || [];
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
    if (window.location.pathname === "/tweets-technical-task-vite-mockapi/") {
      getAllUsers()
        .then((res) => {
          setUsers([...res.data]);
        })
        .catch((error) => {
          console.error(error.message);
        });
    } else {
      getUsers(page)
        .then((res) => {
          setUsers([...users, ...res.data]);
          setShowBtn(true);
          setIsLoading(false);
          if (totalPages) setShowBtn(page < Math.ceil(totalPages / 3));
        })
        .catch((error) => console.error(error.message));
    }
  }, [page]);

  const saveUsers = (id, user, followers) => {
    const usersArr = [...users];
    usersArr[id - 1].followers = followers;
    setUsers(usersArr);
    changeUser(id, user);
    localStorage.setItem("followingUsers", JSON.stringify(ArrFollowId));
  };

  const followOnClick = (id, user) => {
    loadFromStorage();
    if (!ArrFollowId.includes(id)) {
      user.followers = user.followers + 1;
      ArrFollowId = [...ArrFollowId, id];
      saveUsers(id, user, user.followers);
      return;
    }
    user.followers = user.followers - 1;
    ArrFollowId = ArrFollowId.filter((userId) => userId !== id);
    saveUsers(id, user, user.followers);
  };

  const OnClickLoadMore = () => {
    setPage(page + 1);
    scroll.scrollToBottom();
  };

  const onSelect = (e) => {
    setFilter(e.value);
  };

  let filterUsers;
  if (filter === "show all") filterUsers = users;
  loadFromStorage();
  if (filter === "follow")
    filterUsers = users.filter((user) => !ArrFollowId.includes(user.id));
  if (
    filter === "following" ||
    window.location.pathname === "/tweets-technical-task-vite-mockapi/"
  )
    filterUsers = users.filter((user) => ArrFollowId.includes(user.id));
  return (
    <>
      {!(
        window.location.pathname === "/tweets-technical-task-vite-mockapi/"
      ) && <FilterTweets onSelect={onSelect} />}
      <List>
        {filterUsers.map((user) => (
          <TweetItem key={user.id} user={user} handelOnClick={followOnClick} />
        ))}
      </List>
      {isLoading && <Loader />}
      {showBtn && <LoadButton onClick={OnClickLoadMore}>Load More</LoadButton>}
    </>
  );
};
