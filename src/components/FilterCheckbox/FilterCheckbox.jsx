import "./FilterCheckbox.css";
import { useEffect } from "react";

const FilterCheckbox = ({ onToggle, isShorts, setIsShorts }) => {
  //shorts toggle check
  useEffect(() => {
    if (localStorage.getItem("isShorts")) {
      setIsShorts(Boolean(localStorage.getItem("isShorts")));
    }
  }, []);

  function toggle() {
    setIsShorts(!isShorts);
    onToggle(!isShorts);
  }

  return (
    <div
      className={isShorts ? "filter-checkbox_on" : "filter-checkbox_off"}
      onClick={toggle}
    />
  );
};

export default FilterCheckbox;
