import { ImageSourcePropType } from 'react-native';

interface ImageMap {
  WifiImage: ImageSourcePropType;
  backIcon: ImageSourcePropType;
  FoodImage: ImageSourcePropType;
  TravelImage: ImageSourcePropType;
  BillsImage: ImageSourcePropType;
  FilterIcon: ImageSourcePropType;
  CrossIcon: ImageSourcePropType;
  MobileImage: ImageSourcePropType;
  openEyeImage: ImageSourcePropType;
  cloaseEyeImage: ImageSourcePropType;
}

export const IMAGES: ImageMap = {
  WifiImage: require('../assets/Images/wifiLogo.png'),
  backIcon: require('../assets/Images/backIcon.png'),
  FoodImage: require('../assets/Images/Food.png'),
  TravelImage: require('../assets/Images/Travel.png'),
  BillsImage: require('../assets/Images/Bills.png'),
  FilterIcon: require('../assets/Images/Icon.png'),
  CrossIcon: require('../assets/Images/cross.png'),
  MobileImage: require('../assets/Images/MobileIcon.png'),
  openEyeImage: require('../assets/Images/closeEye.png'),
  cloaseEyeImage: require('../assets/Images/openEye.png'),
};
