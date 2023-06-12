import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px;
  background-color: var(--color-gray-10);
`;

export const DivTitle = styled.div`
  img {
    width: 110px;
  }
`;

export const DivButtons = styled.div`
  display: none;

  @media (min-width: 728px) {
    display: flex;
    border-left: 2px solid var(--color-gray-6);
    height: 45px;
    align-items: center;
    gap: 20px;

    a {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      margin-left: 10px;
      color: var(--color-gray-2);
    }

    button {
      padding: 5px;
      border: 1px solid var(--color-gray-5);
      border-radius: 3px;
      background-color: var(--color-gray-10);
    }
  }
`;

export const ButtonMenu = styled.div`
  button {
    border: none;
    background-color: var(--color-gray-10);
  }
  @media (min-width: 728px) {
    display: none;
  }
`;
