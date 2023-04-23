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
import logo from "../../images/logo.svg";
import image from "../../images/image.png";

export const TweetItem = ({ user, handelOnClick }) => {
  const { tweets, followers, avatar, id } = user;
  const formattedNumber = followers.toString();
  const formattedFollowers = [
    formattedNumber.slice(0, formattedNumber.length - 3),
    ",",
    formattedNumber.slice(formattedNumber.length - 3),
  ].join("");
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
        <TweetBtn onClick={() => handelOnClick(id)}>
          {/* Change to Following */}
          Follow
        </TweetBtn>
      </TweetCard>
    </Item>
  );
};
