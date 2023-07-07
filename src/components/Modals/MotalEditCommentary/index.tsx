import { Container } from "./styles";
import { IoClose } from "react-icons/io5";
import { Button } from "../../Buttons";
import { InputGroup } from "../../Input/style";
import { Form } from "../../Form";
import { useForm } from "react-hook-form";
import { IComment } from "../../../contexts/vehiclesContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { createCommentarySchema } from "../../Form/FormCreateCommentary/createCommentarySchema";
import { Input } from "../../Input";

interface ModalEditCommentaryProps {
  description: string;
  closeModal: () => void;
}

export const ModalEditCommentary = ({
  description,
  closeModal,
}: ModalEditCommentaryProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IComment>({ resolver: yupResolver(createCommentarySchema) });

  const onSubmit = (data: IComment) => {
    console.log(data);
  };

  return (
    <Container>
      <div>
        <header>
          <h3 className="font-heading-7-500">{description}</h3>
          <button onClick={closeModal}>
            <IoClose />
          </button>
        </header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Digitar Comentário"
            register={register("content")}
            error={errors.content && errors.content.message}
          />
          <InputGroup>
            <Button
              color="gray6"
              content="Cancelar"
              size="large"
              type="button"
              onClick={closeModal}
            />
            <Button
              color="brand1"
              content="Editar"
              size="large"
              type="submit"
            />
          </InputGroup>
        </Form>
      </div>
    </Container>
  );
};
