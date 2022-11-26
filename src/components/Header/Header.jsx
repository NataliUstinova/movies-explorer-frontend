import "./Header.css";
import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";
import useMediaQuery from "../../hooks/useMediaQuery";
import HeaderLinks from "../HeaderLinks/HeaderLinks";
import usePageIdentification from "../../hooks/usePageIdentification";

const Header = () => {
  const isMainPage = usePageIdentification();
  const { isSmallScreen } = useMediaQuery();

  return (
    <header className={`header ${!isMainPage && "movies-header"}`}>
      <Logo />
      {isSmallScreen ? <Burger /> : <HeaderLinks />}
    </header>
  );
};

export default Header;
