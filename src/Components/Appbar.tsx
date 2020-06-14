import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import { mainColor } from '../constants';

export const AppBar = () => {
  return (
    <Appbar style={styles.container}>
      <Appbar.Action
        style={styles.button}
        icon="card-text-outline"
        onPress={() => console.log('Pressed cash')} />
    </Appbar>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainColor,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  button: {
    top: 5,
  }
});