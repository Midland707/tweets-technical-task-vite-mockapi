import { useEffect, useState } from "react";
import { TweetItem } from "../TweetItem/TweetItem";
import { List, LoadButton } from "./TweetsList.styled";
import { getUsers, getAllUsers } from "../../service/operation";
import { Loader } from "../Loader/Loader";

import * as Scroll from "react-scroll";
var scroll = Scroll.animateScroll;

export const TweetsList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [pages, setPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        setPages(res.data.length);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getUsers(page)
      .then((res) => {
        setUsers([...users, ...res.data]);
        setShowBtn(true);
        setIsLoading(false);
        if (pages) setShowBtn(page < Math.ceil(pages / 3));
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [page]);

  const followOnClick = (id) => {
    console.log("id = ", id);
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
