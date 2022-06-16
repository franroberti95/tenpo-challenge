import React from 'react';
import Body from '../../CustomText/body';
import StarIcon from '../../../assets/icons/star.svg';
import {
  Image,
  SoldByContainer,
  ItemDescriptionContainer,
  ProductNameContainer,
  RateContainer,
  SoldByImageContainer,
  SoldByImage,
} from './styles';
import {ItemContainer} from './styles';

export interface FavoriteItemI {
  backImage: string;
  productName: string;
  soldByName: string;
  stars: number;
  minMins: number;
  maxMins: number;
  soldByImage: string;
}

const FavoriteItem = ({
  backImage,
  productName,
  soldByName,
  stars,
  minMins,
  maxMins,
  soldByImage,
}: FavoriteItemI) => {
  return (
    <ItemContainer>
      <Image style={{height: 96, width: 248}} source={backImage} />
      <ItemDescriptionContainer
        style={{
          shadowOffset: {width: 0, height: 4},
          elevation: 3
        }}>
        <ProductNameContainer>
          <Body variant="body300">{productName}</Body>
          <RateContainer>
            <StarIcon />
            <Body variant="body100">{' ' + stars.toString()}</Body>
          </RateContainer>
        </ProductNameContainer>
        <SoldByContainer>
          <Body variant="body100">{soldByName}</Body>
          <Body variant="body100">
            {minMins}-{maxMins} min.
          </Body>
        </SoldByContainer>
      </ItemDescriptionContainer>
      <SoldByFloatingImage image={soldByImage} />
    </ItemContainer>
  );
};

const SoldByFloatingImage = ({image}: {image: string}) => (
  <SoldByImageContainer>
    <SoldByImage source={image} />
  </SoldByImageContainer>
);

export default FavoriteItem;
