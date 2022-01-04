import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.header.logo}
          resizeMode="contain"
          source={require('../assets/images/logo.png')}
        />
        <Image
          style={styles.header.banner}
          resizeMode="stretch"
          source={require('../assets/images/homeScreen/banner.png')}
        />
        <Image
          style={styles.header.iklan}
          source={require('../assets/images/homeScreen/iklan1.png')}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.body.content}>
          <TouchableOpacity
            style={styles.body.content.item}
            onPress={() => {
              navigation.navigate('CarParking');
            }}>
            <Image
              style={styles.body.content.item.image}
              source={require('../assets/images/homeScreen/mobil.png')}
            />
            <Text style={styles.body.content.item.label}>Yuk Parkir</Text>
            <Text style={styles.body.content.item.label}>Mobil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body.content}>
          <TouchableOpacity
            style={styles.body.content.item}
            onPress={() => {
              navigation.navigate('MotorParking');
            }}>
            <Image
              style={styles.body.content.item.image}
              source={require('../assets/images/homeScreen/motor.png')}
            />
            <Text style={styles.body.content.item.label}>Yuk Parkir</Text>
            <Text style={styles.body.content.item.label}>Motor</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: '#F2F2F2',
    logo: {
      width: '25%',
      marginTop: 10,
      marginLeft: 10,
    },
    banner: {
      marginTop: 50,
      width: '100%',
    },
    iklan: {
      position: 'relative',
      bottom: 50,
      alignSelf: 'center',
    },
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    content: {
      flex: 1,
      marginHorizontal: 15,
      item: {
        width: '100%',
        height: 100,
        backgroundColor: '#FF725E',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        label: {
          color: '#FFF',
          marginVertical: 2,
        },
        image: {
          marginVertical: 2,
        },
      },
    },
  },
});
