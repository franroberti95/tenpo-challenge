import React from 'react';
import CustomText from '../CustomText/body';
import {
  HorizontalItemsScrollContainer,
  ItemContainer,
  MainContainer,
  TextContainer,
} from './styles';

interface HorizontalItemsScrollI {
  label: string;
  items: object[];
  itemComponent: React.FunctionComponent<any>;
}

const HorizontalItemsScroll = ({
  label,
  items,
  itemComponent,
}: HorizontalItemsScrollI) => (
  <MainContainer>
    <TextContainer>
      <CustomText>{label}</CustomText>
    </TextContainer>
    <HorizontalItemsScrollContainer horizontal>
      {items.map((i, k) => (
        <ItemContainer key={k} index={k}>
          {React.createElement(itemComponent, {...i})}
        </ItemContainer>
      ))}
    </HorizontalItemsScrollContainer>
  </MainContainer>
);

export default HorizontalItemsScroll;
