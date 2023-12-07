import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type ButtonDefaultProps = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
  title: string;
};

export function Button({
  title,
  type = "PRIMARY",
  ...rest
}: ButtonDefaultProps) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
