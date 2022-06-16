import React from 'react';
import SearchI from '../../assets/icons/search.svg';
import Avatar from '../../assets/icons/avatar.png';
import {AvatarImage, TopNavContainer} from './styles';

const TopNav = () => (
  <TopNavContainer>
    <AvatarImage source={Avatar} />
    <SearchI />
  </TopNavContainer>
);

export default TopNav;
