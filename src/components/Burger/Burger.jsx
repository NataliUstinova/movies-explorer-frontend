import "./Burger.css";

const Burger = ({ isMainPage }) => {
  return (
    <button
      className={`${
        isMainPage ? "burger burger_white" : "burger burger_black"
      }`}
    />
  );
};

export default Burger;
