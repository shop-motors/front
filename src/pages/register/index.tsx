import { Footer } from "../../components/Footer";
import { FormRegister } from "../../components/Form/FormRegister";
import { ModalUpdateUser } from "../../components/Modals/ModalUpdateUser";
import { NavBar } from "../../components/Nav";
import { Container } from "./style";

export const Register = () => {
  return (
    <Container>
      <NavBar />
        <FormRegister />
        <ModalUpdateUser />
      <Footer />
    </Container>
  );
};
