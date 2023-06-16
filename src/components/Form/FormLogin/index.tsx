import Modal from "../../Modals";
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
        <button>Entrar</button>
        <p>Ainda não possui conta</p>
        <button>Cadastrar</button>
      </FormLog>
  );
};
