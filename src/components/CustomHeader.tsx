import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { IMAGES } from './Images';


interface CustomHeaderProps {
  Heading: string;
  backIcon?: boolean;
  onBackPress?: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  Heading,
  backIcon,
  onBackPress,
}) => {
  return (
    <View style={styles.headerViewStyle}>
      {backIcon && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButtonStyle}>
          <View style={styles.backIconViewStyle}>
            <Image
              source={IMAGES?.backIcon as ImageSourcePropType}
              style={styles.backIconImageStyle}
              tintColor={'#fff'}
            />
          </View>
        </TouchableOpacity>
      )}

      <Text style={[styles.headerTextStyle, {marginLeft: backIcon ? 6 : 16}]}>
        {Heading}
      </Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerViewStyle: {
    paddingVertical: 15,
    backgroundColor: '#e78331',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonStyle: {
    paddingHorizontal: 10,
    marginLeft: 6,
  },
  backIconViewStyle: {
    borderWidth: 1.4,
    borderColor:'#fff',
    borderRadius: 6,
    padding: 3,
  },
  backIconImageStyle: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  backIconStyle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FFF',
  },
  headerTextStyle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },
});
