import "./FilterCheckbox.css";
import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const FilterCheckbox = ({ onToggle, isShorts, setIsShorts }) => {
  const currentUser = useContext(CurrentUserContext);
  const { getItem } = useLocalStorage();
  //shorts toggle check
  useEffect(() => {
    if (getItem("isShorts")) {
      setIsShorts(Boolean(getItem("isShorts")));
    }
  }, [currentUser]);

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
