import MacDImage from '../assets/images/macD.png';
import MeltImage from '../assets/images/melt.png';
import YokonoImage from '../assets/images/yokono.png';
import PapaJhonesImage from '../assets/images/papaJ.png';
import {RestaurantItemI} from '../components/DashboardItems/RestaurantItem';

const restaurantItemsData: RestaurantItemI[] = [
  {
    image: MacDImage,
    name: 'Macdonalds',
    stars: 3.5,
    minMins: 10,
    maxMins: 50,
    discount: 20
  },
  {
    image: MeltImage,
    name: 'MELT',
    stars: 4.5,
    minMins: 10,
    maxMins: 60,
    discount: 30
  },
  {
    image: YokonoImage,
    name: 'YOKONO',
    stars: 3.5,
    minMins: 10,
    maxMins: 50,
    discount: 40
  },
  {
    image: PapaJhonesImage,
    name: 'Papa Jhones',
    stars: 2.5,
    minMins: 20,
    maxMins: 40,
    discount: 60
  },
];

export default restaurantItemsData;
