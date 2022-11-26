import "./Burger.css";

const Burger = ({ isMainPage, openModal }) => {
  return (
    <>
      <button
        className={`${
          isMainPage ? "burger burger_white" : "burger burger_black"
        }`}
        onClick={openModal}
      />
    </>
  );
};

export default Burger;
