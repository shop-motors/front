import { ButtonMenu, DivButtons, DivContainer, DivTitle } from "./style";
import Logo from "../../assets/Motors shop.png";
import { GrMenu } from "react-icons/gr";
import { Button } from "../Buttons";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <DivContainer>
      <Link to={"/"}>
        <DivTitle>
          <img src={Logo} alt="logo da pagina" />
        </DivTitle>
      </Link>

      <ButtonMenu>
        <button>
          <GrMenu />
        </button>
      </ButtonMenu>
      <DivButtons>
        <Link to={"/login"}>
          <a href="">fazer login</a>
        </Link>
        <Link to={"/register"}>
          <Button size="default" color="gray6" content={"Cadastrar"} />
        </Link>
      </DivButtons>
    </DivContainer>
  );
};
