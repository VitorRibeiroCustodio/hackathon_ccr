import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { AppBar } from '../Components/Appbar';
import { CardComponent } from '../Components/Card';
import { news } from '../constants';

export default function Main() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View>
        <ScrollView style={styles.scrollContainer}>
          {news.map(item => {
            return <CardComponent key={item.id} item={item} />
          })}
        </ScrollView>
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
  scrollContainer: {
    top: 60,
  }
});
