import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const NavbarCheckoutComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Text style={styles.description.label}>Total Pembayaran</Text>
        <Text style={styles.description.price}>Rp 50.000</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button.text}>Pesan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavbarCheckoutComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#FFF',
  },
  description: {
    flex: 3,
    alignItems: 'flex-end',
    marginVertical: 5,
    marginRight: 10,
    label: {
      color: '#000',
      fontSize: 12,
    },
    price: {
      color: '#FF642B',
      fontSize: 12,
    },
  },
  button: {
    flex: 1,
    backgroundColor: '#455A64',
    alignItems: 'center',
    justifyContent: 'center',
    text: {
      color: '#FFF',
      fontSize: 14,
    },
  },
});
