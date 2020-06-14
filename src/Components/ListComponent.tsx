import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { donationsHistory } from '../constants';

export default function ListComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comprovante de doações</Text>
      <View style={styles.listContainer}>
        <ScrollView>
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
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    borderColor: '#DCDCDC',
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
  },
  listContainer: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 10,
  }
});
