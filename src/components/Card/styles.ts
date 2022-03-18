import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import * as Animatable from "react-native-animatable";

export const Container = styled(Animatable.View)`
  align-items: center;
  width: 155px;
  height: 200px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  margin: 0 10px;
  border-radius: 10px;
`;

export const Image = styled(Animatable.Image)`
  margin-top: -40px;
  width: 100px;
  height: 100px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFPercentage(3.5)}px;
  margin-top: ${RFPercentage(3)}px;
`;

export const Foundation = styled(Title)`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFPercentage(2.8)}px;
  margin-top: ${RFPercentage(1)}px;
`;
