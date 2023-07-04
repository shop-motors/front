import { Container } from "./styles";
import { IoClose } from "react-icons/io5";
import { Button } from "../../Buttons";
import { InputGroup } from "../../Input/style";

interface ModalDeleteUserProps {
  description: string;
  closeModal: () => void;
  deleteUser: () => void;
}

export const ModalDeleteUser = ({
  description,
  closeModal,
  deleteUser,
}: ModalDeleteUserProps) => {
  return (
    <Container>
      <div>
        <header>
          <h3 className="font-heading-7-500">{description}</h3>
          <button onClick={closeModal}>
            <IoClose />
          </button>
        </header>
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
            content="Deletar"
            size="large"
            type="button"
            onClick={deleteUser}
          />
        </InputGroup>
      </div>
    </Container>
  );
};
