import { Form } from "..";
import { Input } from "../../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Buttons";
import { updateSchema } from "./updateSchema";
import { useContext, useState } from "react";
import { InputGroup } from "../../Input/style";
import { Container } from "./style";
import { UserContexts } from "../../../contexts/userContexts";
import { IUserUpdate } from "../../../interfaces/userInterface";
import { ModalGenericContext } from "../../Modals/ModalGeneric/context";
import { ModalDeleteUser } from "../../Modals/MotalDeleteUser";

interface iFormUpdate {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birth_date: string;
  description: string;
}

export const FormUpdateUser = () => {
  const { setIsOpen } = useContext(ModalGenericContext);
  const { updateUser, deleteUser } = useContext(UserContexts);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<iFormUpdate>({
    resolver: yupResolver(updateSchema),
  });

  const handleUpdateUser: SubmitHandler<IUserUpdate> = (data: IUserUpdate) => {
    updateUser(data);
  };

  const handleDeleteUser = () => {
    deleteUser()
    setIsOpenModal(false);
    setIsOpen(false)
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleUpdateUser)}>
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

        <InputGroup>
          <Button
            type="button"
            color="gray6"
            size="large"
            content="Cancelar"
            onClick={() => setIsOpen(false)}
          />
          <Button
            type="button"
            color="alert1"
            size="large"
            content="Excluir usuário"
            onClick={() => setIsOpenModal(true)}
          />
          <Button
            type="submit"
            // color={!isDirty || !isValid ? "brand3" : "brand1"}
            color="brand1"
            size="large"
            content="Finalizar Cadastro"
            // disabled={!isDirty || !isValid}
          />
        </InputGroup>
      </Form>
      {isOpenModal && (
        <ModalDeleteUser
          closeModal={() => setIsOpenModal(false)}
          deleteUser={handleDeleteUser}
          description="Realmente deseja excluir sua conta?"
        />
      )}
    </Container>
  );
};
