import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;
  align-self: flex-start;
  padding: 2.25rem 1.625rem;
  background-color: var(--color-gray-10);
  border-radius: .25rem;
  width: 100%;
  max-width: 46.875rem;

  > form {
    padding: 0;
    width: 100%;

    > h2 {
      display: none;
    }

    > input {
      width: 100%;
    }

    > fieldset {
      width: 100%;
    }

    > fieldset {
      width: 100%;
    }

    > button {
      width: max-content;
      align-self: flex-start;
    }
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .625rem;
  width: max-content;

  img {
    width: 2.6875rem;
    height: 2.6875rem;
    border-radius: 50%;
  }
`;
