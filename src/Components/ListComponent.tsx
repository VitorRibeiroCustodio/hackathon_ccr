import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { donationsHistory } from '../constants';

export default function ListComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comprovante de doações</Text>
      <View style={styles.listContainer}>
        {
          donationsHistory.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              bottomDivider
              chevron
            />
          ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
  },
  listContainer: {
    width: 300,
    height: 200,
  },
  text: {
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 10,
  }
});
