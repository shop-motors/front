import styled from "styled-components";
import { iDevice } from "../../pages/contexts/modalContext/contextTypes";

export const DivContainer = styled.div`
  width: 100%;
  gap: 50px;
  padding: 20px;
`;

const StyledModalDiv = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  z-index: 20;
  position: absolute;
  top: 50px;
  right: 10px;
  left: 1px;
  padding: 20px;
  background-color: white;
  & .divContent {
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: 100%;

    div {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    button {
      width: 20%;
      border: none;
      padding: 10px;
      background-color: white;
      color: var(--color-gray-4);
      font-size: 15px;
    }
  }
`;

export const ModalComponent = styled.div<iDevice>`
  @media (${({ device }) =>
      device === "desktop" ? "max-width: 767px" : "min-width: 768px"}) {
    display: none;
  }
`;

export default StyledModalDiv;
