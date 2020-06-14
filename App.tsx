import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Navigation } from './src/Components/Navigation';
import { mainColor } from './src/constants';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: mainColor,
    background: 'rgb(242, 242, 242)',
    card: 'rgb(105,105,105)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(105,105,105)',
  },
};


export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Navigation />
    </NavigationContainer>
  );
}

