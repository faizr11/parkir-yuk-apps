import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ListParkingComponent = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.uri} />
      <View style={styles.label}>
        <Text style={{color: '#000', fontSize: 12, fontWeight: '500'}}>
          {props.title}
        </Text>
        <Text style={{color: '#000', fontSize: 10}}>Buka {props.time}</Text>
        <Text style={{color: '#000', fontSize: 10}}>{props.distance} KM</Text>
      </View>
      <Text style={styles.price}>Rp 5.000</Text>
    </View>
  );
};

export default ListParkingComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginVertical: 5,
  },
  image: {
    borderRadius: 10,
    width: 80,
    height: 80,
  },
  label: {
    flex: 3,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  price: {
    color: '#FF642B',
    alignSelf: 'center',
  },
});
