import React, { useContext } from "react";
import { Button } from "../../Buttons/index";
import { ModalProps } from "../../../pages/contexts/modalContext/contextTypes";
import { ModalButtonContext } from "../../../pages/contexts/modalContext";
import StyledUpdateModalDiv, { ModalComponent } from "./style";
import { VehiclesContext } from "../../../contexts/vehiclesContext";
import StyledModalDiv from "../style";

const ModalUpdate: React.FC<ModalProps> = ({
  children,
  content,
  size,
  color,
  device,
  id,
}) => {
  const { updateModal, setUpdateModal } = useContext(ModalButtonContext);
  const { editId, setEditId } = useContext(VehiclesContext);
  const setStateId = (ev: React.MouseEvent<HTMLButtonElement>) => {
    setEditId(ev.currentTarget.id);
  };

  return (
    <ModalComponent device={device}>
      <Button
        id={id}
        content={content}
        size={size}
        type="button"
        color={color}
        onClick={(ev) => {
          setStateId(ev);
          setUpdateModal(!updateModal);
        }}
      />
      {updateModal && (
        <StyledModalDiv className="modalContent">
          <div className="divContent">{children}</div>
        </StyledModalDiv>
      )}
    </ModalComponent>
  );
};
export default ModalUpdate;
