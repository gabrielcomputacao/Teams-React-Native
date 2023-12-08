import { TouchableOpacityProps } from "react-native";
import { Container, FilterProps, Title } from "./styles";

type FilterPropsDefault = TouchableOpacityProps &
  FilterProps & {
    title: string;
  };

export function Filter({
  isActive = false,
  title,
  ...rest
}: FilterPropsDefault) {
  return (
    <Container {...rest} isActive={isActive}>
      <Title>{title}</Title>
    </Container>
  );
}
