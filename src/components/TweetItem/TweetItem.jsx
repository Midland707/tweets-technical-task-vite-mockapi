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
import { getUsers } from "../../service/operation";
export const TweetItem = () => {
  const handelOnClick = () => {
    getUsers()
      .then((res) => {
        // setDataQuery(res.data);
        console.log("users =", res.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

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
        <TweetBtn onClick={handelOnClick}>
          {/* Following */}
          Follow
        </TweetBtn>
      </TweetCard>
    </Item>
  );
};
