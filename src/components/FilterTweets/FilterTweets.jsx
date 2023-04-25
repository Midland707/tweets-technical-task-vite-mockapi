import PropTypes from "prop-types";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import css from "./FilterTweets.module.css";

export const FilterTweets = ({ onSelect }) => {
  const options = ["show all", "follow", "following"];
  const defaultOption = options[0];

  return (
    <Dropdown
      options={options}
      onChange={onSelect}
      value={defaultOption}
      placeholder="Select an option"
      className={css.myClassName}
      controlClassName={css.myControlClassName}
      menuClassName={css.myMenuClassName}
    />
  );
};

FilterTweets.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
