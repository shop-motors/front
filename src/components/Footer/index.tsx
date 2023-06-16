import { DivMainFooter } from "./style";
import LogoFooter from "../../assets/Motors shop (2).png";
import { DivTitle } from "../Nav/style";

export const Footer = () => {
  return (
    <DivMainFooter>
      <div>
        <img src={LogoFooter} alt="Logo" />
        <p>@ 2002 - Todos os direitos reservados</p>
        <a href={DivTitle}>^</a>
      </div>
    </DivMainFooter>
  );
};
