import styled from "styled-components";

export const StyledVehiclesForm = styled.form`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;

  .select {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  #brand {
    border-radius: 4px;
    color: var(--color-gray-2);
    border: red;
    padding: 12px;
    outline: transparent;
    border: 2px;
    border-color: var(--color-gray-1);
  }

  #model {
    border-radius: 4px;
    color: var(--color-gray-2);
    border: red;
    padding: 12px;
    outline: transparent;
    border: 2px;
    border-color: var(--color-gray-1);
  }

  .formHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .formDiv {
    display: flex;
    gap: 48px;
    width: 100%;
  }

  .formDivImg {
    display: flex;
    gap: 51px;
  }

  .divButtons {
    display: flex;
    justify-content: end;
    width: 100%;
  }

  .buttons {
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    display: flex;
    gap: 20px;
    padding-bottom: 30px;

    .buttonCloseModal {
      cursor: pointer;
      border: none;
      border-radius: 4px;
      font-size: var(--font-size-8);
      font-weight: var(--font-weigth-2);
      width: 119px;
      height: 38px;
      color: var(--color-gray-1);
      background-color: var(--color-gray-8);
    }
  }
`;
