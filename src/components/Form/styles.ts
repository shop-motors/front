import styled from "styled-components";

export const Container = styled.form`
  border-radius: .25rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.75rem 1.75rem;
  width: 100%;
  max-width: 21.4375rem;
  background-color: var(--color-gray-10);
  text-align: left;

  h3 {
    margin-bottom: 1.5rem;
  }
  
  @media (min-width: 600px) {
    max-width: 25.75rem;
    padding: 2.75rem 3rem;
  }

  button {
    width: 100%;
  }
`;
