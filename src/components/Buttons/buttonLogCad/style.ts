import styled from "styled-components";

export const DivButtons = styled.div`
  position: absolute;
  padding: 10px;
  top: 50px;
  right: 0;
  background-color: var(--color-white);
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 5px;
  @media (min-width: 728px) {
    display: none;
    border-left: 2px solid var(--color-gray-6);
    height: 45px;
    align-items: center;
    gap: 20px;

    a {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      margin-left: 10px;
      color: var(--color-gray-2);
    }
  }
`;
