import styled from "styled-components";
import { Link } from "react-router-dom";

export const GoBackButton = styled(Link)`
  display: block;
  text-align: center;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  width: 100px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px;
  color: #373737;
  text-transform: uppercase;

  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`;
