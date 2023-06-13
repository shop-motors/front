import { ButtonMenu, DivButtons, DivContainer, DivTitle } from "./style";
import Logo from "../../assets/Motors shop.png";
import { GrMenu } from "react-icons/gr";
import { Button } from "../Buttons";

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
        <Button size="default" color="gray6" content={"Cadastrar"} />
      </DivButtons>
    </DivContainer>
  );
};
