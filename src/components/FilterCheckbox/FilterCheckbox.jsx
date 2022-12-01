import "./FilterCheckbox.css";
import { useState } from "react";

const FilterCheckbox = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(false);

  function toggle() {
    setIsOn(!isOn);
    onToggle(!isOn);
  }

  return (
    <div
      className={isOn ? "filter-checkbox_on" : "filter-checkbox_off"}
      onClick={toggle}
    />
  );
};

export default FilterCheckbox;
