import styled from "styled-components";

export const StyledProducts = styled.main`
  color: var(--color-gray-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--color-gray-7);

  .backgroundBlue {
    width: 100%;
    height: 320px; /* 
    position: fixed; */
    background-color: var(--color-brand-1);
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 75%;
    height: 380px;
    margin-top: 70px;
    border-radius: 4px;
    justify-content: center;
    padding: 30px 55px 30px 55px;
    gap: 25px;
    background-color: var(--color-gray-10);

    img {
      width: 110px;
      border-radius: 50%;
    }

    .profileInfo {
      display: flex;
      align-items: center;
      gap: 10px;

      small {
        background-color: var(--color-brand-4);
        color: var(--color-brand-1);
        padding: 6px 10px 6px 10px;
        font-weight: 600;
        border-radius: 4px;
      }
    }
  }
  .cards {
    display: flex;
    width: 90%;

    justify-content: center;
    margin-top: 90px;
  }
`;
