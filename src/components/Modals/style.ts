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

import styled from "styled-components";
import { iDevice } from "../../pages/contexts/modalContext/contextTypes";
const StyledModalDiv = styled.div`
  width: 100vw;
  height: 100vw;
  z-index: 5;

  & .modalContent {
    z-index: 7;
    display: flex;
    flex-direction: column;
    width: 60vw;
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 70;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: fixed;
    -webkit-transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.88);
    & .divContent {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 80%;
      background-color: white;
      z-index: 71;
      & .buttonCloseModal {
        background: inherit;
        border: none;
        font-size: 20px;
        margin-left: 10px;
        margin-top: 5px;
      }
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