import {
  ButtonMenu,
  DivButtons,
  DivButtonsProfile,
  DivContainer,
  DivTitle,
} from "./style";
import Logo from "../../assets/Motors shop.png";
import { GrMenu } from "react-icons/gr";
import ImgProfile from "../../images/leia.jpeg";

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

export const NavBarProfile = () => {
  return (
    <DivContainer>
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
    </DivContainer>
  );
};
