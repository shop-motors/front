import styled from "styled-components";

export const StyledProducts = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  background-color: var(--color-gray-7);
  @media (min-width: 768px) {
  height: 1600px;
  }
`;

export const HeaderPage = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-brand-1);
  width: 100vw;
  height: 70%;
  gap: 22px;
  img {
    margin: 0 auto;
    margin-top: 60px;
    border-radius: 4px;
    width: 80%;
    max-width: 600px;
    height: 200px;
    background-color: var(--color-gray-10);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 450px;
    img {
      height: 300px;
    }
  }
`;

export const DivCar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 900px;
`;

export const UlCars = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 750px;
  margin-top: 10px;
  align-items: center;

  li {
    width: 80%;
    height: 200px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-gray-10);
    border-radius: 4px;
    padding: 22px;
    gap: 20px;

    button {
      width: 30%;
      max-width: 60px;
      padding: 5px;
      background-color: var(--color-brand-2);
      border: none;
      border-radius: 4px;
      font-size: 12px;
      color: var(--color-brand-4);
    }
    h2 {
      font-size: 15px;
    }
  }
`;

export const DivKmYears = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }

  div {
    display: flex;
    gap: 4px;

    p {
      font-size: 12px;
      color: var(--color-brand-2);
      background-color: var(--color-gray-5);
    }
  }

  span {
    font-size: 12px;
  }
`;

export const DivContainerGalery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: 72px;
  }
`;

export const DivGalery = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  max-width: 440px;
  border-radius: 4px;
  background-color: var(--color-gray-10);
  text-align: start;
  padding: 10px;

  @media (min-width: 768px) {
    height: 300px;
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    height: 50%;
    width: 100%;
    max-width: 500px;
    gap: 3px;
    background-color: var(--color-gray-10);
    margin-left: 8px;
    margin: 0 auto;
  }

  h3 {
    font-size: 14px;
  }
  img {
    width: 25%;
    height: 70px;
    background-color: var(--color-gray-7);
    border-radius: 4px;
  }

  @media (min-width: 768px) {
    img {
      width: 70px;
      margin: 0 auto;
      margin-left: 20px;
    }
    div {
      height: 300px;
    }
  }
`;

export const UlProfile = styled.ul`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  background-color: var(--color-gray-10);
  border-radius: 4px;
  margin-bottom: 20px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;

    img {
      width: 25%;
      height: 70px;
      border-radius: 50%;
    }

    h3 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
      color: var(--color-gray-3);
    }
  }
`;

export const DivDescrição = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-gray-10);
  width: 90%;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  height: 100px;
  margin: 0 auto;
  max-width: 600px;

  h2 {
    font-size: 14px;
    margin-right: 170px;
  }

  p {
    overflow-y: scroll;
    width: 80%;
    font-size: 12px;
    color: var(--color-gray-3);
  }

  @media (min-width: 768px) {
    margin-left: 180px;
    margin-top: 100px;
    h2 {
      margin-right: 485px;
    }
  }
`;
