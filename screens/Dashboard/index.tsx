import React from 'react';
import TopNav from '../../components/TopNav';
import AddAddressButton from '../../components/AddAddressButton';
import HorizontalItemsScroll from '../../components/HorizontalItemsScroll';
import strings from '../../localization';
import RestaurantItem from '../../components/DashboardItems/RestaurantItem';
import restaurantItemsData from '../../mock/restaurants';
import CategoryItem from '../../components/DashboardItems/CategoryItem';
import categoryItemsData from '../../mock/categories';
import favouriteItemsData from '../../mock/favorite';
import FavoriteItem from '../../components/DashboardItems/FavoriteItem';
import {ScrollView} from 'react-native';
import {RootStackParamList} from '../../navigation/RootStackParams';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {
  ContentContainer,
  DashboardContainer,
  TopContainer,
  Spacer,
} from './styles';

type DashboardProps = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

const Dashboard = ({navigation}: DashboardProps) => (
  <DashboardContainer>
    <ScrollView>
      <TopContainer>
        <TopNav />
      </TopContainer>
      <AddAddressButton onPress={() => navigation.navigate('Search')} />
      <ContentContainer>
        <HorizontalItemsScroll
          label={strings.restaurants.toUpperCase()}
          itemComponent={RestaurantItem}
          items={restaurantItemsData}
        />
        <Spacer />
        <HorizontalItemsScroll
          label={strings.categories.toUpperCase()}
          itemComponent={CategoryItem}
          items={categoryItemsData}
        />
        <Spacer />
        <HorizontalItemsScroll
          label={strings.favorite.toUpperCase()}
          itemComponent={FavoriteItem}
          items={favouriteItemsData}
        />
      </ContentContainer>
    </ScrollView>
  </DashboardContainer>
);

export default Dashboard;
