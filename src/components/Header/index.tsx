import CarHeader from "../../assets/Group 28.png";
import CarHeaderDesk from "../../assets/Group 28 (3).png";
import { DivContainer, DivInfo, ImgHeader1, ImgHeader2 } from "./style";

export const HeaderPage = () => {
  return (
    <DivContainer>
      <ImgHeader1 src={CarHeader} alt="imagem de bmw" />
      <ImgHeader2 src={CarHeaderDesk} alt="imagem de bmw" />
      <DivInfo>
        <h2>Motors Shop</h2>
        <p> a melhor plataforma de anúncios de carros no país</p>
      </DivInfo>
    </DivContainer>
  );
};
