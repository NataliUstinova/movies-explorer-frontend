import "./FilterCheckbox.css";
import { useState } from "react";

const FilterCheckbox = ({ filterShortFilms }) => {
  const [isOn, setIsOn] = useState(false);

  function toggle() {
    setIsOn(!isOn);
    filterShortFilms(isOn);
  }

  return (
    <div
      className={isOn ? "filter-checkbox_on" : "filter-checkbox_off"}
      onClick={toggle}
    />
  );
};

export default FilterCheckbox;
