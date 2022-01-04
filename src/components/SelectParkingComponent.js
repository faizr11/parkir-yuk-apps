import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const SelectParkingComponent = props => {
  if (props.status === 'filled') {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: '#F2F2F2',
          },
        ]}>
        <Text style={styles.badge}>{props.number}</Text>
        <Image source={require('../assets/images/orderScreen/filled.png')} />
      </View>
    );
  } else if (props.status === 'checked') {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: '#FF642B',
          },
        ]}>
        <Text style={[styles.badge, {color: '#FFF'}]}>{props.number}</Text>
        <Image source={require('../assets/images/orderScreen/checked.png')} />
      </View>
    );
  } else {
    return (
      <View style={[styles.container, {backgroundColor: '#F2F2F2'}]}>
        <Text style={styles.badge}>{props.number}</Text>
        <Image source={require('../assets/images/orderScreen/empty.png')} />
      </View>
    );
  }
};

export default SelectParkingComponent;

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5,
  },
  badge: {
    position: 'absolute',
    top: 5,
    right: 10,
    color: '#000',
  },
});
