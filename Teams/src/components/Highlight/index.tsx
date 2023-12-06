import { Container, Subtitle, Title } from "./styles";

type TitleProps = {
  title: string;
  subtitle: string;
};

export function Highlight({ title, subtitle }: TitleProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
