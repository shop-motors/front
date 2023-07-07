import styled from "styled-components";

export const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  margin-top: 30px;
  & .displayNone {
    display: none;
    @media (min-width: 768px) {
      display: flex;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const UlCard = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow-x: scroll;
  width: 100vw;
  height: 100%;

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
  height: 300px;
  margin-left: 10px;
  padding: 4px;
  img {
    width: 240px;
    height: 170px;
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
  gap: 65px;

  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    width: 300px;
  }

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 5px;
    text-align: center;

    p {
      color: var(--color-brand-1);
      background-color: var(--color-brand-4);
      width: 100%;
      font-size: 12px;
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
  width: 100%;
  margin-left: 60px;
  gap: 40px;

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 280px;
    height: 460px;
    margin-left: 10px;
    background-color: var(--color-white);
    object-fit: cover;
    padding: 13px 13px 25px 13px;
    border-radius: 4px;
    margin-bottom: 20px;

    img {
      width: 100%;
      background-color: var(--color-gray-7);
    }
  }
  .buttons {
    display: flex;
    gap: 10px;
    width: 100%;
    height: 40px;

    .button {
      font-size: var(--font-size-8);
      width: 105px;
      height: 38px;
      color: var(--color-gray-1);
      border-radius: 4px;
      outline: none;
      font-weight: 600;
      background-color: var(--color-gray-10);
      border: 2px solid var(--color-gray-1);
    }
  }

  .divP {
    display: flex;
    align-items: center;
    width: 100%;

    p {
      padding: 5px;
      border-radius: 2px;
      font-weight: 600;
    }
  }
`;

export const DivBtnFilter = styled.div`
  display: flex;
  margin-top: 40px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DivPagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
  margin-top: 50px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  span {
    color: var(--color-gray-3);
  }
  span:hover {
    color: var(--color-gray-2);
  }

  button {
    border: none;
    color: var(--color-brand-2);
    font-weight: 600;
    font-size: 15px;
    line-height: 30px;
    background-color: var(--color-white);
  }
`;
