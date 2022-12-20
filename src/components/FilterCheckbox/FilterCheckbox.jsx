import "./FilterCheckbox.css";
import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const FilterCheckbox = ({ isShorts, setIsShorts }) => {
  const { getItem } = useLocalStorage();

  function toggle() {
    setIsShorts(!isShorts);
  }

  return (
    <div
      className={isShorts ? "filter-checkbox_on" : "filter-checkbox_off"}
      onClick={toggle}
    />
  );
};

export default FilterCheckbox;
