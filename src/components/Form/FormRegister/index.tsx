import { Form } from "..";
import { Input } from "../../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Buttons";
import { registerSchema } from "./registerSchema";
import { apiCEP } from "../../../services/api";
import { useContext, useState } from "react";
import { InputGroup } from "../../Input/style";
import { Container } from "./style";
import { UserContexts } from "../../../contexts/userContexts";
import { IUserRegister } from "../../../interfaces/userInterface";

interface iFormResgister {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birth_date: string;
  description: string;
  zip_code: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
  password: string;
  confirmPassword: string;
  is_seller: boolean;
}

export const FormRegister = () => {
  const [isSeller, setIsSeller] = useState(false);
  const [selectedButton, setSelectedButton] = useState(true);
  const { registerUser } = useContext(UserContexts);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
    setFocus,
  } = useForm<iFormResgister>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const setAddress = async (event: React.FocusEvent<HTMLInputElement>) => {
    try {
      const cepValue = event.target.value.replace(/\D/g, "");

      const response = await apiCEP.get(cepValue + "/json/");

      const { cep, logradouro, localidade, uf } = response.data;

      setValue("zip_code", cep);
      setValue("state", uf);
      setValue("street", logradouro);
      setValue("city", localidade);

      setFocus("number");
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegisterUser: SubmitHandler<IUserRegister> = (
    data: IUserRegister
  ) => {
    registerUser({ ...data, is_seller: isSeller });
  };

  return (
    <Container>
      <Form title="Cadastro" onSubmit={handleSubmit(handleRegisterUser)}>
        <h3 className="font-body-2-500">Informações Pessoais</h3>

        <Input
          label="Nome"
          register={register("name")}
          placeholder="Ex: Samuel Leão"
          error={errors.name && errors.name.message}
        />
        <Input
          label="E-mail"
          register={register("email")}
          placeholder="Ex: samuel@kenzie.com.br"
          error={errors.email && errors.email.message}
          type="email"
        />
        <Input
          label="CPF"
          register={register("cpf")}
          placeholder="000.000.000-00"
          error={errors.cpf && errors.cpf.message}
        />
        <Input
          label="Celular"
          register={register("phone")}
          placeholder="(DDD) 90000-0000"
          error={errors.phone && errors.phone.message}
        />
        <Input
          label="Data de Nascimento"
          register={register("birth_date")}
          placeholder="00/00/00"
          error={errors.birth_date && errors.birth_date.message}
        />
        <Input
          label="Descrição"
          register={register("description")}
          placeholder="Digitar descrição"
          error={errors.description && errors.description.message}
        />

        <h3 className="font-body-2-50">Infomações de endereço</h3>

        <Input
          label="CEP"
          register={register("zip_code")}
          placeholder="00000.000"
          onBlur={setAddress}
          error={errors.zip_code && errors.zip_code.message}
        />

        <InputGroup>
          <Input
            label="Estado"
            register={register("state")}
            placeholder="Digitar Estado"
            error={errors.state && errors.state.message}
          />
          <Input
            label="Cidade"
            register={register("city")}
            placeholder="Digitar cidade"
            error={errors.city && errors.city.message}
          />
        </InputGroup>

        <Input
          label="Rua"
          register={register("street")}
          placeholder="Digitar rua"
          error={errors.street && errors.street.message}
        />

        <InputGroup>
          <Input
            label="Numero"
            register={register("number")}
            placeholder="Digitar número"
            error={errors.number && errors.number.message}
          />
          <Input
            label="Complemento"
            register={register("complement")}
            placeholder="Ex: apart 307"
            error={errors.complement && errors.complement.message}
          />
        </InputGroup>

        <h3 className="font-body-2-50">Tipo de conta</h3>

        <InputGroup>
          <Button
            color={selectedButton ? "brand1" : "gray8"}
            content="Anunciante"
            type="button"
            size="large"
            onClick={() => {
              setIsSeller(true);
              setSelectedButton(true);
            }}
          />
          <Button
            color={!selectedButton ? "brand1" : "gray8"}
            content="Cliente"
            type="button"
            size="large"
            onClick={() => {
              setIsSeller(false);
              setSelectedButton(false);
            }}
          />
        </InputGroup>

        <Input
          label="Senha"
          register={register("password")}
          placeholder="Digitar Senha"
          type="password"
          error={errors.password && errors.password.message}
        />
        <Input
          label="Confirmar Senha"
          register={register("confirmPassword")}
          placeholder="Confirmar Senha"
          type="password"
          error={errors.confirmPassword && errors.confirmPassword.message}
        />

        <Button
          type="submit"
          color="brand1"
          size="large"
          content="Finalizar Cadastro"
          disabled={!isDirty || !isValid}
        />
      </Form>
    </Container>
  );
};
