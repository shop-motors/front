import { Card } from "../../components/Cards";
import { Footer } from "../../components/Footer";
import { HeaderPage } from "../../components/Header";
import { NavBar } from "../../components/Nav";
import { DivContainer } from "./style";

export const Home = () => {
  return (
    <DivContainer>
      <NavBar />
      <HeaderPage />
      <Card />
      <Footer />
    </DivContainer>
  );
};
