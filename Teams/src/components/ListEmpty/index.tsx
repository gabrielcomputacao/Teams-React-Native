import { Container, Message } from "./styles";

type EmptyProps = {
  message: string;
};

export function ListEmpty({ message }: EmptyProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
