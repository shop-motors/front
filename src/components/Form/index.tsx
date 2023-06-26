import React from "react";
import { Container } from "./styles";

interface IFormProps {
  title?: string;
  children: React.ReactNode;
  onSubmit?: () => void;
}

export const Form = ({ title, onSubmit, children }: IFormProps) => {
  return (
    <Container onSubmit={onSubmit} noValidate={true} autoComplete="off">
      <h2 className="font-heading-5-500">{title}</h2>
      <div>{children}</div>
    </Container>
  );
};
