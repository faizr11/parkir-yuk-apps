import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CircleImageComponent from '../components/CircleImageComponent';
import {TextInput} from 'react-native-paper';
import ButtonProfileComponent from '../components/ButtonProfileComponent';

const ChangeProfileScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{marginTop: 50}}>
        <View style={styles.profile}>
          <CircleImageComponent
            uri={require('../assets/images/profileScreen/profile.png')}
          />
        </View>
        <View style={styles.inputs}>
          <TextInput
            label="Nama Lengkap"
            selectionColor="#000"
            underlineColor="#000"
            activeUnderlineColor="#FF725E"
            style={{backgroundColor: '#FFF', marginVertical: 10}}
          />
          <TextInput
            label="Jenis Kelamin"
            selectionColor="#000"
            underlineColor="#000"
            activeUnderlineColor="#FF725E"
            style={{backgroundColor: '#FFF', marginVertical: 10}}
          />
          <TextInput
            label="Tanggal Lahir"
            selectionColor="#000"
            underlineColor="#000"
            activeUnderlineColor="#FF725E"
            style={{backgroundColor: '#FFF', marginVertical: 10}}
          />
          <TextInput
            label="No Handphone"
            selectionColor="#000"
            underlineColor="#000"
            activeUnderlineColor="#FF725E"
            style={{backgroundColor: '#FFF', marginVertical: 10}}
          />
          <TextInput
            label="Email"
            selectionColor="#000"
            underlineColor="#000"
            activeUnderlineColor="#FF725E"
            style={{backgroundColor: '#FFF', marginVertical: 10}}
          />

          <ButtonProfileComponent
            label="Finish"
            onPress={() => {
              navigation.navigate('Profile');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ChangeProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  profile: {
    alignItems: 'center',
    marginBottom: 15,
  },
  inputs: {
    paddingHorizontal: 20,
  },
});
