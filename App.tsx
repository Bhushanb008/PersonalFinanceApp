import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#e78331" barStyle="light-content" />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
