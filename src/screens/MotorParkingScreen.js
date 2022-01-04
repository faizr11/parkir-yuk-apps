import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import BackIcon from '../assets/icons/backIcon.svg';
import {Searchbar} from 'react-native-paper';
import ListParkingComponent from '../components/ListParkingComponent';

const MotorParkingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('Root');
          }}>
          <View style={styles.header.buttonBack}>
            <BackIcon width={15} height={15} fill="#000" />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.header.title}>
          <Text style={styles.header.title.text}>YUK PARKIR MOTOR</Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <View style={styles.body}>
        <Searchbar
          placeholder="Cari Tempat Parkir"
          placeholderTextColor={'#000'}
          style={styles.body.searchbar}
          iconColor="#FF8922"
        />
        <Text style={styles.body.title}>Tempat Parkir Terdekat</Text>
        <ScrollView style={styles.body.list}>
          <ListParkingComponent
            uri={require('../assets/images/carParkingScreen/photo-mall.png')}
            title="AEON MALL JGC"
            time="10.00 - 21.00 WIB"
            distance="99.9"
          />
          <ListParkingComponent
            uri={require('../assets/images/carParkingScreen/photo-mall.png')}
            title="AEON MALL JGC"
            time="10.00 - 21.00 WIB"
            distance="99.9"
          />
          <ListParkingComponent
            uri={require('../assets/images/carParkingScreen/photo-mall.png')}
            title="AEON MALL JGC"
            time="10.00 - 21.00 WIB"
            distance="99.9"
          />
          <ListParkingComponent
            uri={require('../assets/images/carParkingScreen/photo-mall.png')}
            title="AEON MALL JGC"
            time="10.00 - 21.00 WIB"
            distance="99.9"
          />
          <ListParkingComponent
            uri={require('../assets/images/carParkingScreen/photo-mall.png')}
            title="AEON MALL JGC"
            time="10.00 - 21.00 WIB"
            distance="99.9"
          />
          <ListParkingComponent
            uri={require('../assets/images/carParkingScreen/photo-mall.png')}
            title="AEON MALL JGC"
            time="10.00 - 21.00 WIB"
            distance="99.9"
          />
          <ListParkingComponent
            uri={require('../assets/images/carParkingScreen/photo-mall.png')}
            title="AEON MALL JGC"
            time="10.00 - 21.00 WIB"
            distance="99.9"
          />
          <ListParkingComponent
            uri={require('../assets/images/carParkingScreen/photo-mall.png')}
            title="AEON MALL JGC"
            time="10.00 - 21.00 WIB"
            distance="99.9"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default MotorParkingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    buttonBack: {
      flex: 1,
    },
    title: {
      flex: 3,
      alignItems: 'center',
      text: {
        color: '#000',
        fontSize: 14,
        fontWeight: '800',
      },
    },
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
    searchbar: {
      backgroundColor: '#F2F2F2',
      borderRadius: 10,
    },
    title: {
      marginVertical: 10,
      fontSize: 14,
      fontWeight: '500',
      color: '#000',
    },
    list: {
      height: '75%',
    },
  },
});
