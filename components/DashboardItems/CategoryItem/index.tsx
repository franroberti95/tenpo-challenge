import React from 'react';
import Body from '../../CustomText/body';
import {mainTheme} from '../../../styles/theme';
import { Opacity, CategoryItemContainer } from './styles';

export interface CategoryItemI {
  name: string;
  image: string;
}

const CategoryItem = ({name, image}: CategoryItemI) => (
  <Opacity>
    <CategoryItemContainer source={image} resizeMode="cover" imageStyle={{borderRadius: 8}}>
      <Body fontWeight={'bold'} color={mainTheme.WHITE}>
        {name}
      </Body>
    </CategoryItemContainer>
  </Opacity>
);

export default CategoryItem;
