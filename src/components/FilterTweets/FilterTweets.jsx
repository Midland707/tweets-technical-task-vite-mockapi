import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useState } from "react";

export const FilterTweets = () => {
  const options = ["show all", "follow", "followings"];
  const defaultOption = options[0];
  const [filter, setFilter] = useState("show all");

  const onSelect = (e) => {
    console.log("Dropdown = ", e.value);
    setFilter(e.value);
  };

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
