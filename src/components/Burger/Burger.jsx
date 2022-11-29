import "./Burger.css";

const Burger = ({ isMainPage, openModal }) => {
  return (
    <>
      <button
        aria-label="меню"
        className={`${
          isMainPage ? "burger burger_white" : "burger burger_black"
        }`}
        onClick={openModal}
      />
    </>
  );
};

export default Burger;
