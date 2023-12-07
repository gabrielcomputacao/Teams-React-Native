import { Container, Icon, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type GroupCard = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: GroupCard) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
