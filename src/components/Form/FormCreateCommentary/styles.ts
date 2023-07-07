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

  @media (min-width: 768px) {
    align-self: center;
    max-width: 37.6rem;
    margin-right: 500px;
  }

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

  img {
    width: 2.6875rem;
    height: 2.6875rem;
    border-radius: 50%;
  }
`;

export const SentencesContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  > button {
    border: none;
    padding: 0.25rem 0.75rem;
    border-radius: 3.125rem;
    background-color: var(--color-gray-7);
    color: var(--color-gray-3);
    font-weight: 600;
    transition: 0.3s;

    :hover {
      color: var(--color-gray-1);
    }
  }
`;
