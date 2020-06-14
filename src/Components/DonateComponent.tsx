import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, CheckBox } from 'react-native-elements';

export default function DonateComponent() {
  return (
    <View style={styles.container}>
      <Input
        placeholder='Valor da doação'
      />
      <Button
        title="Doar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    padding: 50,
  },
});
