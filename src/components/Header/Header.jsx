import "./Header.css";
import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";
import useMediaQuery from "../../hooks/useMediaQuery";
import HeaderLinks from "../HeaderLinks/HeaderLinks";

const Header = ({ isMainHeader }) => {
  const { isSmallScreen } = useMediaQuery();

  return (
    <header className={`header ${!isMainHeader && "movies-header"}`}>
      <Logo />
      {isSmallScreen ? (
        <Burger isMainHeader={isMainHeader} />
      ) : (
        <HeaderLinks isMainHeader={isMainHeader} />
      )}
    </header>
  );
};

export default Header;
