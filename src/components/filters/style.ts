import styled from "styled-components";

export const DivMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const UlFilters = styled.ul`
margin-top: 70px;
  /* display: none; */
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    margin-left: 35px;
    gap: 10px;
  }

  li {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      height: 180px;
    }
  }
  h3 {
    margin-bottom: 12px;
    color: var(--color-gray-0);
  }

  span {
    font-size: 14px;
    color: var(--color-gray-3);
  }
`;

export const DivInputs = styled.div`
  margin-left: 18px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LikmPrice = styled.li`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
    gap: 7px;
  }

  input {
    padding: 4px;
    width: 90px;
    text-align: center;
    background-color: var(--color-gray-5);
    color: var(--color-gray-3);
    border: none;
  }
`;
