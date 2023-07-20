import ThemeButton from "../ChangeThemeButton and GlobalTheme/ThemeButton";
import { NavStyle } from "./NavbarStyle";

const Navbar = () => {
  return (
    <NavStyle>
        <>
        <h3 className="title">
            Equipe: Levir, Obede e Livia
        </h3>
    <nav>
      <h1>To do list - Fundamentos de Programação</h1>
      <ThemeButton />
    </nav>
        </>
    </NavStyle>
  );
};

export default Navbar;
