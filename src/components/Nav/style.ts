import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px;
  position: fixed;
  z-index: 1;
  top: 0px;
  background-color: var(--color-gray-9);

  .containerProfile {
    display: flex;
    align-items: center;
    width: 95%;
    height: 100%;
    justify-content: space-between;
  }
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

export const DivContainerProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;
  padding: 14px;
  position: fixed;
  top: 0px;
  background-color: var(--color-gray-9);

  .containerProfile {
    display: flex;
    align-items: center;
    width: 95%;
    height: 100%;
    justify-content: space-between;
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

export const DivButtonsProfile = styled.div`
  position: relative;

  .imgProfile {
    display: flex;
    align-items: center;
    width: 230px;
    padding-left: 35px;
    object-fit: fill;
    gap: 10px;
  }

  img {
    object-fit: fill;
    width: 43px;
    height: 43px;
    border-radius: 50px;
  }

  > div:last-child {
    display: none;
    width: 100%;
    padding: 1rem;
    background-color: var(--color-gray-9);
    border-radius: 0.25rem;
    position: absolute;
    left: 0;
  }

  :hover {
    > div:last-child {
      display: block;
    }
  }
`;

export const DisplayNone = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: none;
  }
`;

export default DivButtonsProfile;
