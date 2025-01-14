import styled from "styled-components";

export const Container = styled.span`
  font-size: 14px;
  font-weight: 450;
  padding: 8px 16px;
  border-radius: 5px;
  margin-right: 10px;
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  background-color: ${({theme}) => theme.COLORS.ORANGE};
`