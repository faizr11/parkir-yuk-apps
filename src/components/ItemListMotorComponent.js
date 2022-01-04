import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ItemListMotorComponent = props => {
  return (
    <View style={styles.item}>
      <View style={styles.item.image}>
        <Image source={require('../assets/images/ticketScreen/motor.png')} />
      </View>
      <View style={styles.item.body}>
        <Text style={styles.item.body.title}>{props.title}</Text>
        <Text style={styles.item.body.subTitle}>{props.subTitle}</Text>
        <Text style={styles.item.body.subTitle}>{props.time}</Text>
        <Text style={styles.item.body.subTitle}>
          {props.date} -{' '}
          <Text style={styles.item.body.status}>{props.status}</Text>
        </Text>
      </View>
    </View>
  );
};

export default ItemListMotorComponent;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 1,
    elevation: 1,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginVertical: 10,
    image: {
      backgroundColor: '#FF642B',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      margin: 5,
      borderRadius: 10,
    },
    body: {
      marginLeft: 10,
      justifyContent: 'center',
      title: {
        color: '#000',
        fontSize: 12,
        fontWeight: '800',
      },
      subTitle: {
        color: '#000',
        fontSize: 10,
      },
      status: {
        fontWeight: '600',
      },
    },
  },
});
