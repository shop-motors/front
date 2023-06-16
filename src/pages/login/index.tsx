import { NavBar } from "../../components/Nav";
import { Login } from "../../components/Form/FormLogin";
import { DivMainForm } from "./style";

export const LoginPage = () => {
  return (
    <DivMainForm>
      <NavBar />
      <Login />
    </DivMainForm>
  );
};
