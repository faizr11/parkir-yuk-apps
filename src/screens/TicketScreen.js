import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import MotorScreenCompoenet from '../components/MotorScreenCompoenet';
import MobilScreenComponent from '../components/MobilScreenComponent';

const TicketScreen = () => {
  const [screen, setScreen] = useState('motor');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header.label}>TIKET</Text>

        <View style={styles.header.tabs}>
          <TouchableWithoutFeedback
            onPress={() => {
              setScreen('motor');
            }}>
            <View
              style={
                screen === 'motor'
                  ? [styles.header.tabs.tab, styles.active]
                  : styles.header.tabs.tab
              }>
              <Text style={styles.header.tabs.tab.label}>Motor</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setScreen('mobil');
            }}>
            <View
              style={
                screen === 'mobil'
                  ? [styles.header.tabs.tab, styles.active]
                  : styles.header.tabs.tab
              }>
              <Text style={styles.header.tabs.tab.label}>Mobil</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.body}>
        {screen === 'motor' ? (
          <MotorScreenCompoenet />
        ) : (
          <MobilScreenComponent />
        )}
      </View>
    </View>
  );
};

export default TicketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    alignItems: 'center',
    marginTop: 15,
    label: {
      color: '#000',
      fontSize: 14,
      fontWeight: 'bold',
    },
    tabs: {
      flexDirection: 'row',
      marginTop: 20,
      tab: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 10,
        label: {
          color: '#000',
          fontSize: 14,
          fontWeight: '600',
        },
      },
    },
  },
  active: {
    borderBottomWidth: 3,
    borderBottomColor: '#FF642B',
  },
  body: {
    marginTop: 20,
  },
});
