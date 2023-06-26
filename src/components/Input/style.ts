import styled from "styled-components";

interface iInputProps {
  error: string | undefined;
}

export const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: none;
  position: relative;

  small {
    color: var(--color-alert1);
    font-weight: bold;
  }
`;

export const InputStyles = styled.input<iInputProps>`
  width: 100%;
  border: .0938rem solid var(--color-gray-7) !important;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  border-color: ${({ error }) => error && "var(--color-alert1) !important"};

  :focus {
    outline: transparent;
    border-color: var(--color-primary);
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`;
