import "./Burger.css";
import usePageIdentification from "../../hooks/usePageIdentification";

const Burger = () => {
  const { isMainPage } = usePageIdentification();

  return <div className={`${isMainPage ? "burger_white" : "burger"}`} />;
};

export default Burger;
