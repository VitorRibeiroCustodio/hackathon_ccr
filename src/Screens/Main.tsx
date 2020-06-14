import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppBar } from '../Components/Appbar';
import { CardComponent } from '../Components/Card';
import { news } from '../constants';

export default function Main() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View>
        {news.map(item => {
          return <CardComponent key={item.id} item={item} />
        })}
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
