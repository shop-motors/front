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
