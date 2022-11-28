import "./Header.css";
import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";
import useMediaQuery from "../../hooks/useMediaQuery";
import HeaderLinks from "../HeaderLinks/HeaderLinks";

const Header = ({ isMainPage, openModal, closeModal, isLoggedIn }) => {
  const { isSmallScreen } = useMediaQuery();
  return (
    <header
      className={`${isMainPage ? "header" : "header header-transparent"}`}
    >
      <Logo />
      {isSmallScreen && isLoggedIn ? (
        <Burger isMainPage={isMainPage} openModal={openModal} />
      ) : (
        <HeaderLinks closeModal={closeModal} isLoggedIn={isLoggedIn} />
      )}
    </header>
  );
};

export default Header;
