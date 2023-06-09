import {
  ButtonMenu,
  DisplayNone,
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
import { BtnsNav } from "../Buttons/buttonLogCad";
import { useContext } from "react";
import { CarsContext } from "../../contexts/carsContext";
import { ModalUpdateUser } from "../Modals/ModalUpdateUser";
import { UserContexts } from "../../contexts/userContexts";
import { CardUser } from "../CardUser";

export const NavBar = () => {
  const { openBtns } = useContext(CarsContext);
  return (
    <DivContainer>
      <Link to={"/"}>
        <DivTitle>
          <img src={Logo} alt="logo da pagina" />
        </DivTitle>
      </Link>

      <ButtonMenu>
        <button>
          <GrMenu onClick={() => openBtns()} />
        </button>
      </ButtonMenu>
      <DivButtons>
        <Link to={"/login"}>
         fazer login
        </Link>
        <Link to={"/register"}>
          <Button
            size="default"
            color="gray6"
            content={"Cadastrar"}
            type={undefined}
          />
        </Link>
      </DivButtons>
    
        <BtnsNav />
    
    </DivContainer>
  );
};

export const NavBarProfile = () => {
  const {userLoged} = useContext(UserContexts)
  
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
          {userLoged && <CardUser name={userLoged.name} />}
          <ModalUpdateUser />
        </DivButtonsProfile>
      </div>
    </DivContainerProfile>
  );
};
