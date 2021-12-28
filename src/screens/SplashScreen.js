import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.header}
        source={require('../assets/images/logo.png')}
      />
      <Image
        style={styles.footer}
        source={require('../assets/images/splashScreen/Parking-amico.png')}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  header: {
    marginTop: '40%',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
  },
});
