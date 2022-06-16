import StarIcon from '../../../assets/icons/star.svg';
import React from 'react';
import Body from '../../CustomText/body';
import {mainTheme} from '../../../styles/theme';
import {
  DiscountRibbonContainer,
  Image,
  ItemContainer,
  RateContainer,
  ItemDescriptionContainer,
} from './styles';

export interface RestaurantItemI {
  image: string;
  name: string;
  stars: number;
  minMins: number;
  maxMins: number;
  discount: number;
}

const RestaurantItem = ({
  image,
  name,
  stars,
  minMins,
  maxMins,
  discount,
}: RestaurantItemI) => (
  <ItemContainer>
    <Image source={image} />
    <Body variant="body300" align={'center'}>
      {name}
    </Body>
    <ItemDescriptionContainer>
      <RateContainer>
        <StarIcon />
        <Body variant="body100">{' ' + stars.toString()}</Body>
      </RateContainer>
      <Body variant="body100">
        {minMins}-{maxMins} min.
      </Body>
    </ItemDescriptionContainer>
    <DiscountRibbon quantity={discount} />
  </ItemContainer>
);

const DiscountRibbon = ({quantity}) => (
  <DiscountRibbonContainer>
    <Body
      variant={'body70'}
      customStyle={'font-weight: 700;'}
      color={mainTheme.WHITE}>
      {quantity}%
    </Body>
    <Body variant={'body50'} color={mainTheme.WHITE}>
      DCTO
    </Body>
  </DiscountRibbonContainer>
);

export default RestaurantItem;
