import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppBar } from '../Components/Appbar';
import ListComponent from '../Components/ListComponent';

export default function DonationsScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View>
        <Text>Donate</Text>
        <ListComponent />
      </View>
    </View>
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
