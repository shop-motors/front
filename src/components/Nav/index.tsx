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
          <Button size="default" color="gray6" content={"Cadastrar"} type={undefined} />
        </Link>
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
