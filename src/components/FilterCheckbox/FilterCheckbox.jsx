import "./FilterCheckbox.css";

const FilterCheckbox = ({ onToggle, isShorts, setIsShorts }) => {
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
