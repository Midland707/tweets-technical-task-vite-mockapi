import styled from "styled-components";
import { Link } from "react-router-dom";

export const GoBackButton = styled(Link)`
  background-color: lightgrey;
  display: block;
  width: 100px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;
  text-decoration: none;
  font-size: 20px;
  padding: 10px;
  color: black;

  &:hover,
  &:focus {
    color: blue;
  }
`;
