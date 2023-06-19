import {
  ButtonMenu,
  DivButtons,
  DivButtonsProfile,
  DivContainer,
  DivContainerProfile,
  DivTitle,
} from "./style";
import Logo from "../../assets/Motors shop.png";
import { GrMenu } from "react-icons/gr";
import ImgProfile from "../../images/leia.jpeg";
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

export const NavBarProfile = () => {
  return (
    <DivContainerProfile>
      <div className="containerProfile">
        <DivTitle>
          <img src={Logo} alt="logo da pagina" />
        </DivTitle>
        <ButtonMenu>
          <button>
            <GrMenu />
          </button>
        </ButtonMenu>
        <DivButtonsProfile>
          <div className="imgProfile">
            <img src={ImgProfile} alt="" />
            <p>Leia Organa</p>
          </div>
        </DivButtonsProfile>
      </div>
    </DivContainerProfile>
  );
};
