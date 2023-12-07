import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${(props) => props.theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.COLORS.GRAY_200};
  font-size: ${(props) => props.theme.FONT_SIZE.MD}px;
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: "fill",
}))`
  margin-right: 20px;
`;
