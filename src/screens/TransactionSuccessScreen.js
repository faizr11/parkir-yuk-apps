import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SuccessIcon from '../assets/icons/success.svg';
import ButtonProfileComponent from '../components/ButtonProfileComponent';
const TransactionSuccessScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', marginBottom: 24}}>
        <Text style={styles.title}>Pembayaran Berhasil!</Text>
        <View style={styles.icon}>
          <SuccessIcon width={100} height={100} fill={'#FFF'} />
        </View>
      </View>
      <ButtonProfileComponent
        label="FINISH"
        onPress={() => {
          navigation.navigate('Root');
        }}
      />
    </View>
  );
};

export default TransactionSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 18,
  },
  icon: {
    backgroundColor: '#FF642B',
    width: 120,
    height: 120,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
