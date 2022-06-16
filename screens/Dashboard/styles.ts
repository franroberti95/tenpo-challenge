import styled from 'styled-components/native';
import RoundedTopContainer from '../../components/RoundedTopContainer';

export const DashboardContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.MAIN_BACKGROUND_COLOR};
`;

export const TopContainer = styled.View`
  margin-left: ${props => props.theme.MAIN_HORIZONTAL_MARGIN}px;
  margin-right: ${props => props.theme.MAIN_HORIZONTAL_MARGIN}px;
  margin-bottom: 176px;
`;

export const ContentContainer = styled(RoundedTopContainer)`
  background-color: white;
  padding-top: 38px;
  padding-left: 16px;
  transform: translateY(-25px);
`;

export const Spacer = styled.View`
  margin-top: 58px;
`;

