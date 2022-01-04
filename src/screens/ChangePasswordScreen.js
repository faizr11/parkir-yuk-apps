import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CircleImageComponent from '../components/CircleImageComponent';
import {TextInput} from 'react-native-paper';
import ButtonProfileComponent from '../components/ButtonProfileComponent';

const ChangePasswordScreen = ({navigation}) => {
  const [oldPassword, setOldPassword] = useState('123');
  const [newPassword, setNewPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const changeToAsteris = (str = '') => {
    const arr = str.split('');
    let result = '';
    arr.map(() => {
      result += '*';
    });
    return result;
  };
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
            label="Password Lama"
            selectionColor="#000"
            underlineColor="#000"
            activeUnderlineColor="#FF725E"
            style={{backgroundColor: '#FFF', marginVertical: 10}}
            onChangeText={setOldPassword}
            value={changeToAsteris(oldPassword)}
          />
          <TextInput
            label="Password Baru"
            selectionColor="#000"
            underlineColor="#000"
            activeUnderlineColor="#FF725E"
            style={{backgroundColor: '#FFF', marginVertical: 10}}
            onChangeText={setNewPassword}
            value={changeToAsteris(newPassword)}
          />
          <TextInput
            label="Ketik Ulang Password"
            selectionColor="#000"
            underlineColor="#000"
            activeUnderlineColor="#FF725E"
            style={{backgroundColor: '#FFF', marginVertical: 10}}
            onChangeText={setRepeatPassword}
            value={changeToAsteris(repeatPassword)}
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

export default ChangePasswordScreen;

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
