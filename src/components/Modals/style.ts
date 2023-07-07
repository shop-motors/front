import styled from "styled-components";
import { iDevice } from "../../pages/contexts/modalContext/contextTypes";
const StyledModalDiv = styled.div`
  top: 0;
  left: 0;
  z-index: 70;
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  -webkit-transition: 0.5s;
  background-color: rgba(0, 0, 0, 0.88);
  font-weight: bold;

  h2 {
    color: var(--color-gray-1);
  }

  h3 {
    color: var(--color-gray-1);
  }

  & .divContent {
    position: absolute;
    padding: 30px 30px 50px 30px;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 650px;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    margin-top: 15px;
    overflow: scroll;
    background-color: var(--color-gray-9);

    & .buttonCloseModal {
      background: inherit;
      border: none;
      font-size: 20px;
      margin-left: 10px;
      margin-top: 5px;
    }
  }
`;

export const ModalComponent = styled.div<iDevice>`
  min-width: 0;
  @media (${({ device }) =>
      device === "desktop" ? "max-width: 767px" : "min-width: 768px"}) {
    display: none;
  }
`;

export default StyledModalDiv;
