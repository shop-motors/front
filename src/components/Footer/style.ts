import styled from "styled-components";

export const DivMainFooter = styled.footer`
  background-color: var(--color-gray-0);
  width: 100%;
  margin-top: 30px;

  div {
    background-color: var(--color-gray-0);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-top: 25px;
    flex-direction: column;
    text-align: center;
    gap: 30px;
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-around;
      height: 180px;
    }
  }

  img {
    width: 100px;
  }
  p {
    font-size: 10px;
    color: var(--color-white);
  }

  button {
    width: 33px;
    height: 30px;
    margin-bottom: 10px;
    background-color: var(--color-gray-1);
    color: var(--color-white);
    border: none;
    border-radius: 5px;
    text-align: center;
  }
`;
