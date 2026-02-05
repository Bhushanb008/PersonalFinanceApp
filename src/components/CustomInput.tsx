import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { IMAGES } from './Images';

interface CustomInputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  isPassWord?: boolean;
}
const WIDTH = Dimensions.get('window').width;

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  error,
  containerStyle,
  style,
  isPassWord,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <View
        style={[
          styles.inputViewStyle,
          focused && styles.focusedBorder,
          error && styles.errorBorder,
        ]}
      >
        <TextInput
          {...rest}
          style={[
            styles.inputStyle,
            style,
            {
              width: WIDTH * 0.74,
            },
          ]}
          secureTextEntry={isPassWord && !showPassword}
          placeholderTextColor="#999"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {isPassWord ? (
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}
            style={{ width: WIDTH * 0.1 }}
          >
            {showPassword ? (
              <Image
                source={IMAGES?.openEyeImage}
                style={{
                  height: 22,
                  width: 22,
                  resizeMode: 'contain',
                  marginLeft: 5,
                }}
              />
            ) : (
              <Image
                source={IMAGES?.cloaseEyeImage}
                style={{ height: 38, width: 38, resizeMode: 'contain' }}
              />
            )}
          </TouchableOpacity>
        ) : (
          <View style={{ width: WIDTH * 0.1 }} />
        )}
      </View>
      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  labelText: {
    fontSize: 13,
    marginBottom: '1%',
    marginTop: '4%',
    color: '#444',
    fontWeight: '500',
  },
  inputViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    height: 50,
  },
  inputStyle: {
    paddingHorizontal: 4,
    fontSize: 15,
    color: '#000',
  },
  focusedBorder: {
    borderColor: '#e78331',
  },
  errorBorder: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: '1%',
  },
});
