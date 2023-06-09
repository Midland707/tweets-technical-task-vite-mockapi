import styled from "styled-components";
import { Link } from "react-router-dom";

export const TweetsMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: #d9acc9;
`;

export const GoBackButton = styled(Link)`
  display: block;
  text-align: center;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  background-color: #ebd8ff;
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10.3108px;
  text-decoration: none;
  padding: 10px;
  color: #373737;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 20px;

  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`;
