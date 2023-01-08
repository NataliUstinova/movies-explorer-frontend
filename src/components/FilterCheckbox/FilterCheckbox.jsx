import "./FilterCheckbox.css";
import useLocalStorage from "../../hooks/useLocalStorage";

const FilterCheckbox = ({
  isShorts,
  setIsShorts,
  isShortsSaved,
  setIsShortsSaved,
}) => {
  const { setItem } = useLocalStorage();

  function toggle() {
    if (window.location.pathname === "/saved") {
      setIsShortsSaved(!isShortsSaved);
      setItem("isShortsSaved", !isShortsSaved);
    } else {
      setIsShorts(!isShorts);
      setItem("isShorts", !isShorts);
    }
  }

  return (
    <div
      className={
        (isShorts && window.location.pathname === "/movies") ||
        (isShortsSaved && window.location.pathname === "/saved")
          ? "filter-checkbox_on"
          : "filter-checkbox_off"
      }
      onClick={toggle}
    />
  );
};

export default FilterCheckbox;
