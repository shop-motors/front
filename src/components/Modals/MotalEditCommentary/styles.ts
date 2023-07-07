import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  > div {
    width: 100%;
    max-width: 620px;
    background-color: var(--color-white);
    border-radius: var(--border-radius-1);
    padding: 1rem;
    height: fit-content;

    > form {
      max-width: none;
      padding: 0;

      > h2 {
        display: none;
      }
    }

    @media (min-width: 600px) {
      padding: 1rem 1.5rem 2rem;
    }

    > header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;

      > h3 {
        font-weight: 600;
      }

      > button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        font-size: 1.5rem;
        color: var(--color-gray-4);
        transition: 0.5s;

        &:hover {
          color: var(--color-gray-2);
        }
      }
    }
  }
`;
