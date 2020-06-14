import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements'

import { AppBar } from '../Components/Appbar';

const list = [
  {
    title: 'Histórico de doações',
    icon: 'av-timer'
  },
  {
    title: 'Alterar senha',
    icon: 'flight-takeoff'
  },
]

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.listContainer}>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    width: 300,
    height: 200,
  },
});
