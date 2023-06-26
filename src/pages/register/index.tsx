import { Footer } from "../../components/Footer";
import { FormRegister } from "../../components/Form/FormRegister";
import { ModalEditUser } from "../../components/Modals/ModalEditUser";
import { NavBar } from "../../components/Nav";
import { Container } from "./style";

export const Register = () => {
  return (
    <Container>
      <NavBar />
        <FormRegister />
        {/* <ModalEditUser /> */}
      <Footer />
    </Container>
  );
};
