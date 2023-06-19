import { Button } from "../../Buttons";
import { FormLog } from "./style";

export const Login = () => {
  return (
    <FormLog>
      <h3>Login</h3>
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="Email"></input>
      <label htmlFor="password">Senha</label>
      <input type="password" placeholder="Senha"></input>
      <span>Esqueci minha senha</span>
      <Button size="large" color="border_blue" content="Entrar" />
      <p>Ainda não possui conta?</p>
      <Button size="large" color="border_ligth_gray" content="Cadastrar" />
    </FormLog>
  );
};
