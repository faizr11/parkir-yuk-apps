import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {List} from 'react-native-paper';
import {Row, Col} from 'react-native-responsive-grid-system';
import NavbarCheckoutComponent from '../components/NavbarCheckoutComponent';
import ClockIcon from '../assets/icons/clock.svg';
import PinIcon from '../assets/icons/pin.svg';
import TimeOrderCardComponent from '../components/TimeOrderCardComponent';
import SelectParkingComponent from '../components/SelectParkingComponent';

const arr = [0, 1, 2, 3, 4, 5];

const OrderScreen = () => {
  const [checked, setChecked] = useState(0);
  const [place, setPlace] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [checkedParking, setCheckedParking] = useState();

  const handlePress = () => setExpanded(!expanded);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.header.image}
          resizeMode="cover"
          source={require('../assets/images/carParkingScreen/photo-mall.png')}
        />
      </View>
      <ScrollView style={styles.body}>
        <View style={styles.body.place}>
          <Text style={styles.body.place.title}>AEON MALL JGC</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ClockIcon width={12} height={12} fill={'#455A64'} />
            <Text style={styles.body.place.text}>Buka 10.00 21.00 WIB</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <PinIcon width={12} height={12} fill={'#455A64'} />
            <Text style={styles.body.place.text}>99.9 KM</Text>
          </View>
        </View>
        <View style={styles.body.price}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.body.price.text}>Harga Parkir</Text>
            <Text style={[styles.body.price.text, {color: '#FF642B'}]}>
              Rp 5.000
            </Text>
          </View>
          <Text style={styles.body.price.note}>
            *Pesanan ini tidak dapat dibatalkan
          </Text>
        </View>
        <View style={styles.body.time}>
          <Text style={styles.body.time.title}>
            Tentukan waktu kedatangan anda
          </Text>
          <ScrollView horizontal={true} style={styles.body.time.list}>
            {arr.map(el => {
              return (
                <TouchableOpacity
                  key={el}
                  onPress={() => {
                    setChecked(el);
                  }}>
                  <TimeOrderCardComponent
                    time="12.00"
                    active={checked === el ? true : false}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.body.parking}>
          <Text style={styles.body.parking.title}>
            Tentukan tempat parkir anda
          </Text>
          <List.Section>
            <List.Accordion
              title={place || 'Pilih tempat parkir'}
              style={{color: '#000'}}
              titleStyle={{color: '#000'}}
              expanded={expanded}
              onPress={handlePress}>
              <List.Item
                title="Lt.1"
                onPress={() => {
                  setPlace(1);
                  setExpanded(false);
                }}
              />
              <List.Item
                title="Lt.2"
                onPress={() => {
                  setPlace(2);
                  setExpanded(false);
                }}
              />
              <List.Item
                title="Lt.3"
                onPress={() => {
                  setPlace(3);
                  setExpanded(false);
                }}
              />
            </List.Accordion>
          </List.Section>
          <View style={styles.body.parking.listParking}>
            <Row>
              {arr.map(el => {
                return (
                  <Col xs={4} sm={4} md={4} lg={4} key={el}>
                    <TouchableOpacity
                      onPress={() => {
                        setCheckedParking(el);
                      }}>
                      <SelectParkingComponent
                        status={checkedParking === el ? 'checked' : 'empty'}
                        number={el}
                      />
                    </TouchableOpacity>
                  </Col>
                );
              })}
            </Row>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <NavbarCheckoutComponent />
      </View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    image: {
      width: '100%',
    },
  },
  body: {
    position: 'relative',
    top: -10,
    place: {
      backgroundColor: '#FFF',
      borderTopStartRadius: 15,
      borderTopEndRadius: 15,
      padding: 15,
      text: {
        color: '#000',
        fontSize: 12,
        marginLeft: 8,
        marginVertical: 2,
      },
      title: {
        color: '#000',
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 10,
      },
    },
    price: {
      padding: 15,
      backgroundColor: '#FFF',
      marginTop: 10,
      text: {
        color: '#000',
        fontSize: 14,
        fontWeight: '600',
      },
      note: {
        color: '#666666',
        fontSize: 8,
        marginTop: 5,
      },
    },
    time: {
      padding: 15,
      backgroundColor: '#FFF',
      marginTop: 10,
      title: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
      },
      list: {
        marginTop: 10,
      },
    },
    parking: {
      padding: 15,
      backgroundColor: '#FFF',

      title: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
      },
      listParking: {
        flexDirection: 'row',
      },
    },
  },
  footer: {},
});
