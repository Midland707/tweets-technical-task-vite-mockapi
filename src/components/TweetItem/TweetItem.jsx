import {
  Item,
  TweetCard,
  Rectangle,
  CardLogo,
  CardImage,
  AvatarBorder,
  Avatar,
  Tweets,
  Followers,
  TweetBtn,
} from "./TweetItem.styled";
import PropTypes from "prop-types";
import logo from "../../images/logo.svg";
import image from "../../images/image.png";

export const TweetItem = ({ user, handelOnClick }) => {
  const { tweets, followers, avatar, id } = user;

  let buttonName;
  const parsedUsers = JSON.parse(localStorage.getItem("followingUsers")) || [];
  if (parsedUsers)
    if (parsedUsers.includes(id)) buttonName = "Following";
    else buttonName = "Follow";

  const formattedFollowers = followers.toLocaleString("en-US");

  return (
    <Item>
      <TweetCard>
        <CardLogo alt="card logo" src={logo} />
        <CardImage alt="card image" src={image} />
        <Rectangle />
        <AvatarBorder>
          <Avatar alt="avatar" src={avatar} />
        </AvatarBorder>
        <Tweets>{tweets} Tweets</Tweets>
        <Followers>{formattedFollowers} Followers</Followers>
        <TweetBtn
          style={{
            backgroundColor: buttonName === "Following" ? "#5cd3a8" : "#ebd8ff",
          }}
          onClick={() => handelOnClick(id, user)}
        >
          {buttonName}
        </TweetBtn>
      </TweetCard>
    </Item>
  );
};

TweetItem.propTypes = {
  user: PropTypes.object.isRequired,
  handelOnClick: PropTypes.func.isRequired,
};
