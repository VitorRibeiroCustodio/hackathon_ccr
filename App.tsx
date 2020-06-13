import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { Navigation } from './src/Components/Navigation';

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}><Navigation /></NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
