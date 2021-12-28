import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/logo.png')} />
        <Image
          style={{width: '100%'}}
          resizeMode="stretch"
          source={require('../assets/images/homeScreen/banner.png')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
