import styled from 'styled-components/native';

export const BaseBody = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: ${props => props.fontWeight};
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.color};
  text-align: ${props => props.align};
  ${props => props.customStyle}
`;

export const Body300 = styled(BaseBody)`
  font-size: 14px;
`;

export const Body100 = styled(BaseBody)`
  font-size: 12px;
`;

export const Body70 = styled(BaseBody)`
  font-size: 8px;
  line-height: 8px;
`;
export const Body50 = styled(BaseBody)`
  font-size: 7px;
  line-height: 7px;
`;
