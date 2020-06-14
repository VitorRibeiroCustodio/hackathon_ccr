import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function DonateComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.priceContiner}>
        <Text style={styles.priceStyle}>R$50</Text>
      </View>
      <View style={styles.donationContainer}>
        <Text style={styles.donateStyle}>Doação de alimentos</Text>
        <Text style={styles.description}>Ajude os caminhoneiros doando um valor que será revertido em alimentos</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Text style={styles.infoStyle}>Infos</Text>
        <Text style={styles.donateTextStyle}>Doar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 150,
    backgroundColor: '#00b7e7',
    padding: 10,
    marginTop: 50,
    marginBottom: 15,
    marginLeft: 50,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  priceContiner: {
    width: 50,
    height: 30,
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  priceStyle: {
    fontSize: 15,
    color: 'white',
    fontWeight: "700"
  },
  donationContainer: {
    width: 250,
    height: 35,
    marginTop: 15,
  },
  donateStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: "700",
  },
  description: {
    fontSize: 12,
    color: 'white',
    fontWeight: "300",
    marginTop: 2,
  },
  buttonsContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 110,
  },
  infoStyle: {
    borderWidth: 1,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    borderRadius: 5,
    padding: 5,
  },
  donateTextStyle: {
    borderWidth: 1,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#00e2d7',
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#00e2d7',
  }
});
