import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 0;
  padding: 0;
  margin-top: 20px;
`;

export const LoadButton = styled.button`
  width: 196px;
  height: 50px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;

  cursor: pointer;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10.3108px;
  margin-bottom: 30px;
  margin-top: 20px;

  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`;
