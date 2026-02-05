import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
  ViewStyle,
  Dimensions,
} from 'react-native';

interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
}

const WIDTH = Dimensions.get('window')?.width;

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  loading = false,
  disabled = false,
  style,
  ...rest
}) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.8}
      disabled={isDisabled}
      style={[styles.buttonStyle, isDisabled && styles.disabledStyle, style]}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.titleStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 12,
    backgroundColor: '#e78331',
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH * 0.9,
    paddingVertical: '3%',
    alignSelf: 'center',
    marginTop:'8%',
  },
  disabledStyle: {
    opacity: 0.5,
    // backgroundColor: '#e78331',
  },
  titleStyle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
