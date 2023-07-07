import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;
  align-self: flex-start;
  padding: 2.25rem 1.625rem;
  background-color: var(--color-gray-10);
  border-radius: 0.25rem;
  width: 100%;
  max-width: 46.875rem;

  > form {
    padding: 0;
    width: 100%;
    max-width: none;

    > h2 {
      display: none;
    }

    > div {
      > button {
        width: max-content;
        align-self: flex-start;

        :hover {
          width: max-content;
        }
      }
    }
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  width: max-content;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.6875rem;
    height: 2.6875rem;
    border-radius: 50%;
    background-color: var(--color-random10);
    color: var(--color-white);
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

export const SentencesContainer = styled.div`
  display: flex;
  gap: .5rem;
  flex-wrap: wrap;

  > button {
    border: none;
    padding: .25rem .75rem;
    border-radius: 3.125rem;
    background-color: var(--color-gray-7);
    color: var(--color-gray-3);
    font-weight: 600;
    transition: .3s;

    :hover {
      color: var(--color-gray-1);
    }
  }
`
