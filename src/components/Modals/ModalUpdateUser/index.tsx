import { FormUpdateUser } from "../../Form/FormUpdateUser";
import { ModalGeneric } from "../ModalGeneric";

export const ModalUpdateUser = () => {
  return (
    <ModalGeneric
      title="Editar perfil"
      button_color="brand1"
      button_content="Editar"
      button_size="default"
      button_type="button"
    >
      <FormUpdateUser />
    </ModalGeneric>
  );
};
