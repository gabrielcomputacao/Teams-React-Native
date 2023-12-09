import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.COLORS.GRAY_600};

  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  background-color: ${(props) => props.theme.COLORS.GRAY_700};

  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
`;

export const HeaderList = styled.Text`
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin: 32px 0 12px;
`;

export const NumberOfPlayers = styled.View`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
