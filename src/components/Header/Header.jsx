import "./Header.css";
import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";
import useMediaQuery from "../../hooks/useMediaQuery";
import HeaderLinks from "../HeaderLinks/HeaderLinks";

const Header = ({ isMainPage, openModal, closeModal }) => {
  const { isSmallScreen } = useMediaQuery();
  return (
    <header
      className={`${isMainPage ? "header" : "header header-transparent"}`}
    >
      <Logo />
      {isSmallScreen ? (
        <Burger isMainPage={isMainPage} openModal={openModal} />
      ) : (
        <HeaderLinks closeModal={closeModal} />
      )}
    </header>
  );
};

export default Header;
