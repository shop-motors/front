import React from "react";
import { Container } from "./styles";

interface IFormProps {
  title: string;
  children: React.ReactNode;

}

export const Form = ({
  title,
 
  children,
}: IFormProps) => {
  return (
    <Container noValidate={true} autoComplete="off">
      <h2 className="font-heading-2">{title}</h2>
      <div>{children}</div>
    </Container>
  );
};
