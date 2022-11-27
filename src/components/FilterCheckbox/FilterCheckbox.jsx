import "./FilterCheckbox.css";
import { useState } from "react";

const FilterCheckbox = () => {
  const [isOn, setIsOn] = useState(true);

  function toggle() {
    setIsOn(!isOn);
  }

  return (
    <div
      className={isOn ? "filter-checkbox_on" : "filter-checkbox_off"}
      onClick={toggle}
    />
  );
};

export default FilterCheckbox;
