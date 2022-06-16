import styled from "styled-components/native";


export const DiscountRibbonContainer = styled.View`
  border-radius: 15px;
  height: 30px;
  width: 30px;
  position: absolute;
  top: -3.25px;
  right: -3.25px;
  background-color: #00BAA4;
  justify-content: center;
  align-items: center;
`;

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ItemDescriptionContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;
export const Image = styled.Image`
  width: 104px;
  height: 104px;
`;
export const ItemContainer = styled.View`
  flex-direction: column;
  position: relative;
  margin-top:3.25px;
`;
