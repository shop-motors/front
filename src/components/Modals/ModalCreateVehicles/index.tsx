import React, { useContext } from "react";
import StyledModalDiv from "./style";
import { Button } from "../../Buttons/index";
import { ModalProps } from "../../../pages/contexts/modalContext/contextTypes";
import { ModalButtonContext } from "../../../pages/contexts/modalContext";
import { ModalComponent } from "./style";
import { VehiclesContext } from "../../../contexts/vehiclesContext";

const ModalVehicles: React.FC<ModalProps> = ({
  children,
  content,
  size,
  color,
  device,
  id,
}) => {
  const { modal, setModal } = useContext(ModalButtonContext);
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
          console.log(editId);
          setModal(!modal);
        }}
      />
      {modal && (
        <StyledModalDiv className="modalContent">
          <div className="divContent">{children}</div>
        </StyledModalDiv>
      )}
    </ModalComponent>
  );
};
export default ModalVehicles;
