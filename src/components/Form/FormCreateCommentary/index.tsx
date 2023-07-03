import { Container, SentencesContainer, UserContainer } from "./styles";
import ImgProfile from "../../../images/leia.jpeg";
import { Form } from "..";
import { Input } from "../../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createCommentarySchema } from "./createCommentarySchema";
import { Button } from "../../Buttons";
import { useState } from "react";

interface IComment {
  content: string;
}

export const FormCreateCommentary = () => {
  const [currentSentence, setCurrentSentence] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IComment>({ resolver: yupResolver(createCommentarySchema) });

  const sentences = [
    "Gostei muito!",
    "Incrível",
    "Recomendarei para meus amigos!",
  ];

  const dataUserMock = {
    img: ImgProfile,
    name: "Leia Organa",
  };

  const handleCreateCommentary: SubmitHandler<IComment> = (data: IComment) => {
    console.log(data);
  };

  const setSentences = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setValue("content", event.currentTarget.innerText);
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

      <SentencesContainer>
        {sentences.map((sentence, index) => {
          return (
            <button onClick={setSentences} key={index}>
              {sentence}
            </button>
          );
        })}
      </SentencesContainer>
    </Container>
  );
};
