import { Card } from "../../components/Cards";
import { HeaderPage } from "../../components/Header";
import { NavBar } from "../../components/Nav";
import { DivContainer } from "./style";

export const Home = () => {
  return (
    <DivContainer>
      <NavBar />
      <HeaderPage />
      <Card />
    </DivContainer>
  );
};
