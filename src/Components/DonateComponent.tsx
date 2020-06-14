import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DonateComponent() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Donate</Text>
        <Text>List</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
  },
});
