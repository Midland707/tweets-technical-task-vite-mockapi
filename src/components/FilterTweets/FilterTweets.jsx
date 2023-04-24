import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useState } from "react";

export const FilterTweets = ({ onSelect }) => {
  const options = ["show all", "follow", "following"];
  const defaultOption = options[0];

  return (
    <>
      <Dropdown
        options={options}
        onChange={onSelect}
        value={defaultOption}
        placeholder="Select an option"
      />
    </>
  );
};
