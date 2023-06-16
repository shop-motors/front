import styled from "styled-components";

export const UlCard = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow-x: scroll;
  width: 100vw;
  margin-left: 7px;

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--grey-50);
    border-radius: 20px;
    border: 1px solid var(--grey-50);
  }

  @media (min-width: 768px) {
    flex-wrap: wrap;
    overflow: hidden;
    justify-content: space-around;
    width: 900px;
    gap: 2rem;
    margin: 0 auto;
  }
`;

export const LiCard = styled.li`
  width: 80%;
  max-width: 250px;
  margin: 3rem 0 0 1.5rem;
  img {
    background-color: var(--color-gray-7);
  }

  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    width: 250px;
  }
`;

export const DivLi = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DivUsuario = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  span {
    background-color: var(--color-brand-2);
    font-weight: 500;
    font-size: 12px;
    color: var(--color-whiteFixed);
    border-radius: 50%;
    padding: 4px 7px 4px 7px;
  }
`;

export const DivPrice = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 70px;

  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    width: 300px;
  }

  div {
    display: flex;
    flex-direction: row;
    width: 30%;
    max-width: 100px;
    gap: 5px;
    text-align: center;

    p {
      color: var(--color-brand-1);
      background-color: var(--color-brand-4);
    }
  }
`;

//-------------------------------------------------------

export const UlCardAdmin = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: scroll;
  margin-left: 40px;
  width: 90%;
  margin-left: 60px;
  gap: 50px;

  .LiCard {
  }
`;
