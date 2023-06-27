import { Input } from "../../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Buttons";
import imgRecover from "../../../images/recover.png";
import { useContext, useEffect } from "react";
import {
  StyledRecoverPasswordEmailForm,
  StyledRecoverPasswordForm,
} from "./style";
import { ModalButtonContext } from "../../../pages/contexts/modalContext";
import { useNavigate } from "react-router-dom";
import {
  RecoverSchemaEmail,
  RecoverSchemaPassword,
} from "./formRecover.schema";
import {
  IRecoverEmail,
  IRecoverPassword,
} from "../../../interfaces/recoverInterface";
import { NavBar } from "../../Nav";

export const FormRecoverPasswordEmail = () => {
  const { modal, setModal } = useContext(ModalButtonContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRecoverEmail>({ resolver: yupResolver(RecoverSchemaEmail) });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const submitRecover = (formData: IRecoverEmail) => {
    console.log(formData);
  };

  return (
    <StyledRecoverPasswordEmailForm
      title="Recuperar Senha"
      onSubmit={handleSubmit(submitRecover)}
    >
      <img src={imgRecover} alt="" />
      <h3 className="font-body-2-50">Recuperar Senha</h3>

      <Input
        label="Insira seu email de recuperação de senha"
        register={register("email")}
        placeholder="Ex: socorro@mail.com"
        error={errors.email && errors.email.message}
      />

      <div className="divButtons">
        <div className="buttons">
          <button
            color="gray8"
            content="Cancelar"
            type="button"
            className="buttonCloseModal"
            onClick={() => navigate("/login")}
          >
            Voltar ao Login
          </button>
          <Button
            type="submit"
            color="brand3"
            size="default"
            content="Enviar"
            disabled={Object.keys(errors).length > 0}
            /*  onClick={() => <NavBar />} */
          />
        </div>
      </div>
    </StyledRecoverPasswordEmailForm>
  );
};

export const FormRecoverPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRecoverPassword>({
    resolver: yupResolver(RecoverSchemaPassword),
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const submitRecover = (formData: IRecoverPassword) => {
    console.log(formData);
  };

  return (
    <StyledRecoverPasswordForm
      title="Recuperar Senha"
      onSubmit={handleSubmit(submitRecover)}
    >
      <img src={imgRecover} alt="" />
      <h3 className="font-body-2-50">Recuperar Senha</h3>

      <Input
        label="Insira sua nova senha"
        register={register("password")}
        placeholder="Ex: socorro@mail.com"
        error={errors.password && errors.password.message}
      />
      <Input
        label="Repita sua nova senha"
        register={register("password")}
        placeholder="Ex: socorro@mail.com"
        error={errors.password && errors.password.message}
      />

      <div className="divButtons">
        <div className="buttons">
          <button
            color="gray8"
            content="Cancelar"
            type="button"
            className="buttonCloseModal"
            onClick={() => navigate("/recover/password")}
          >
            Voltar
          </button>

          <Button
            type="submit"
            color="brand3"
            size="default"
            content="Enviar"
            disabled={Object.keys(errors).length > 0}
            /*  onClick={() => navigate("/login")} */
          />
        </div>
      </div>
    </StyledRecoverPasswordForm>
  );
};
