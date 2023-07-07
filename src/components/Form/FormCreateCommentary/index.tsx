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
import { useNavigate } from "react-router";

export const FormCreateCommentary = () => {
  const { createCommentary, retriveVehicle } = useContext(VehiclesContext);
  const { userLoged } = useContext(UserContexts);
  const navigate = useNavigate();

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
    const idVehicle = localStorage.getItem("@IDVEHICLE");

    createCommentary(data);

    if (idVehicle) {
      setTimeout(() => {
        retriveVehicle(idVehicle);
      }, 3);
      navigate("/products");
    } else {
      console.log("deu ruim");
      navigate("/advertiser");
    }
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
