import styled from "styled-components";

export const StyledRecoverPasswordEmailForm = styled.form`
  background-color: var(--color-gray-9);
  padding: 20px;
  height: 400px;
  width: 400px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  box-shadow: 0px 0px 40px -3px var(--color-gray-3);

  img {
    width: 100px;
  }

  .divButtons {
    display: flex;
    justify-content: end;
    height: 110px;
    align-items: center;
    width: 100%;
  }

  .buttons {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 20px;

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

export const StyledRecoverPasswordForm = styled.form`
  background-color: var(--color-gray-9);
  padding: 20px;
  height: 510px;
  width: 400px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  box-shadow: 0px 0px 40px -3px var(--color-gray-3);

  img {
    width: 100px;
  }

  .divButtons {
    display: flex;
    justify-content: end;
    height: 110px;
    align-items: center;
    width: 100%;
  }

  .buttons {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 20px;

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
