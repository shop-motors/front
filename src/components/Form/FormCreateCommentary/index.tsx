import { Container, SentencesContainer } from "./styles";
import { Form } from "..";
import { Input } from "../../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createCommentarySchema } from "./createCommentarySchema";
import { Button } from "../../Buttons";
import { useContext, useEffect } from "react";
import { IComment, VehiclesContext } from "../../../contexts/vehiclesContext";
import { UserContexts } from "../../../contexts/userContexts";
import { CardUser } from "../../CardUser";

export const FormCreateCommentary = () => {

  const { createCommentary, retriveVehicles } = useContext(VehiclesContext);

  const { createCommentary } = useContext(VehiclesContext);
  const { userLoged } = useContext(UserContexts);

  useEffect(()=> {

  }, [])


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<IComment>({ resolver: yupResolver(createCommentarySchema) });

  const sentences = [
    "Gostei muito!",
    "Incrível",
    "Recomendarei para meus amigos!",
  ];

  const handleCreateCommentary: SubmitHandler<IComment> = (data: IComment) => {
    createCommentary(data);

    retriveVehicles()
    console.log("gsdv")

    reset();

  };

  const setSentences = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setValue("content", event.currentTarget.innerText);
  };

  return (
    <Container>
      {userLoged && <CardUser name={userLoged.name} />}

      <Form onSubmit={handleSubmit(handleCreateCommentary)}>
        <Input
          placeholder="Digitar Comentário"
          register={register("content")}
          error={errors.content && errors.content.message}
        />
        <Button
          color={!userLoged ? "gray6" : "brand1"}
          content="Comentar"
          size="large"
          type="submit"
          disabled={!userLoged}
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
