import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface NoDataFoundProps {
  message?: string;
}

const NoDataFound: React.FC<NoDataFoundProps> = ({ message }) => {
  return (
    <View style={styles.EmptyViewStyle}>
      <Text style={styles.NoDataText}>{message ? message : 'No data found'}</Text>
    </View>
  );
};

export default NoDataFound;

const styles = StyleSheet.create({
  EmptyViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NoDataText: {
    color: '#222020',
    fontSize: 15,
  },
});
