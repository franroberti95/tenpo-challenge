import styled from "styled-components/native";

export const SoldByImage = styled.Image`
  width: 42px;
  height: 42px;
`;

export const SoldByImageContainer = styled.View`
  position: absolute;
  top: 8px;
  left: 12px;
  height: 42px;
  width: 42px;
  justify-content: center;
  align-items: center;
`;

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ItemDescriptionContainer = styled.View`
  padding: 12px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;

  background-color: white;
  width: 241px;
  margin-bottom: 10px;
  margin-left: 4px;
  margin-right: 4px;
  shadow-color: #171717;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
`;
export const Image = styled.Image``;
export const ItemContainer = styled.View`
  flex-direction: column;
  position: relative;
  margin-top: 3.25px;
  width: 248px;
`;
export const ProductNameContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const SoldByContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
