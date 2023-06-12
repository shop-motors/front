import styled from "styled-components";

export const Container = styled.form`
  border-radius: .25rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.75rem 1.75rem;
  width: 100%;
  max-width: 21.4375rem;
  background-color: #f5f5f5;
  
  @media (min-width: 600px) {
    max-width: 25.75rem;
    padding: 2.75rem 3rem;
  }

  button {
    width: 100%;
  }
`;
