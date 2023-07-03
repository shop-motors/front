import { Container, UserContainer } from "./styles";
import ImgProfile from "../../../images/leia.jpeg";
import { Form } from "..";
import { Input } from "../../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createCommentarySchema } from "./createCommentarySchema";
import { Button } from "../../Buttons";

interface IComment {
  content: string;
}

export const FormCreateCommentary = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createCommentarySchema) });

  const dataUserMock = {
    img: ImgProfile,
    name: "Leia Organa",
  };

  const handleCreateCommentary: SubmitHandler<IComment> = (data: IComment) => {
    console.log(data);
  };

  return (
    <Container>
      <UserContainer>
        <img
          src={dataUserMock.img}
          alt={`Imagem do Usuário ${dataUserMock.name}`}
        />
        <p>{dataUserMock.name}</p>
      </UserContainer>

      <Form onSubmit={handleSubmit(handleCreateCommentary)}>
        <Input
          placeholder="Digitar Comentário"
          register={register("content")}
          error={errors.content && errors.content.message}
        />
        <Button color="brand1" content="Comentar" size="large" type="submit" />
      </Form>
    </Container>
  );
};
