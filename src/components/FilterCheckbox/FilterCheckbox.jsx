import "./FilterCheckbox.css";
import useLocalStorage from "../../hooks/useLocalStorage";

const FilterCheckbox = ({ isShorts, setIsShorts }) => {
  const { setItem } = useLocalStorage();

  function toggle() {
    setIsShorts(!isShorts);
    setItem("isShorts", !isShorts);
  }

  return (
    <div
      className={isShorts ? "filter-checkbox_on" : "filter-checkbox_off"}
      onClick={toggle}
    />
  );
};

export default FilterCheckbox;
