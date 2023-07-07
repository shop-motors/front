import { Container, SentencesContainer, UserContainer } from "./styles";
import ImgProfile from "../../../images/leia.jpeg";
import { Form } from "..";
import { Input } from "../../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createCommentarySchema } from "./createCommentarySchema";
import { Button } from "../../Buttons";
import { useContext } from "react";
import { IComment, VehiclesContext } from "../../../contexts/vehiclesContext";

export const FormCreateCommentary = () => {
  const { createCommentary, retriveVehicles } = useContext(VehiclesContext);

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

  const user = {
    img: ImgProfile,
    name: "Alguém"
  };

  const handleCreateCommentary: SubmitHandler<IComment> = (data: IComment) => {
    createCommentary(data);
    retriveVehicles()
    console.log("gsdv")
  };

  const setSentences = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setValue("content", event.currentTarget.innerText);
  };

  return (
    <Container>
      {user && (
        <UserContainer>
          <img
            src={user.img}
            alt={`Imagem do Usuário ${user.name}`}
          />
          <p>{user.name}</p>
        </UserContainer>
      )}

      <Form onSubmit={handleSubmit(handleCreateCommentary)}>
        <Input
          placeholder="Digitar Comentário"
          register={register("content")}
          error={errors.content && errors.content.message}
        />
        <Button
          color={!user? "gray6" : "brand1"}
          content="Comentar"
          size="large"
          type="submit"
          disabled={!user}
        />
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
