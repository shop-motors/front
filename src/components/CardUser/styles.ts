import styled from "styled-components";

export const Container = styled.div`
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