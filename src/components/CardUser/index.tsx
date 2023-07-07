import { Container } from "./styles";

export interface cardUserProps {
  name: string;
}

export const CardUser = ({ name }: cardUserProps) => {
  return (
    <Container>
      <div>{name[0].toLocaleUpperCase()}</div>
      <p>{name}</p>
    </Container>
  );
};
