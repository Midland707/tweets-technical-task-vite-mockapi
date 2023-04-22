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

export const TweetItem = () => {
  return (
    <Item>
      <TweetCard>
        <CardLogo alt="card logo" src={logo} />
        <CardImage alt="card image" src={image} />
        <Rectangle />
        <AvatarBorder>
          <Avatar
            alt="avatar"
            src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/105.jpg"
          />
        </AvatarBorder>
        <Tweets>Tweets</Tweets>
        <Followers>Followers</Followers>
        <TweetBtn>Follow</TweetBtn>
      </TweetCard>
    </Item>
  );
};
