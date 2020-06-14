import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';


export const CardComponent = (props: any) => (
  <Card style={styles.container}>
    <Card.Title
      title=""
      subtitle="" />
    <Card.Cover style={styles.image} source={{ uri: props.item.image }} />
    <Card.Content style={styles.titleContainer}>
      <Title style={styles.title}>{props.item.title}</Title>
    </Card.Content>
    <Card.Actions>
      <Button>Ver Notícia</Button>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 200,
    marginTop: 20,
  },
  titleContainer: {
    top: 0,
    width: 300,
    marginTop: 50,
  },
  title: {
    fontSize: 12,
    fontWeight: "900",
  },
  image: {
    width: 300,
    height: 100,
    resizeMode: 'cover',
    position: 'absolute',
    marginRight: 20,
  }
});
