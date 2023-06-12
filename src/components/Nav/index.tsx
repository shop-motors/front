import { ButtonMenu, DivButtons, DivContainer, DivTitle } from "./style";
import Logo from "../../assets/Motors shop.png";
import { GrMenu } from "react-icons/gr";

export const NavBar = () => {
  return (
    <DivContainer>
      <DivTitle>
        <img src={Logo} alt="logo da pagina" />
      </DivTitle>
      <ButtonMenu>
        <button>
          <GrMenu />
        </button>
      </ButtonMenu>
      <DivButtons>
        <a>fazer login</a>
        <button>Cadastrar</button>
      </DivButtons>
    </DivContainer>
  );
};
