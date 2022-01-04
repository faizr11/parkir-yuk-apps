import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import ButtonProfileComponent from '../components/ButtonProfileComponent';
import CircleImageComponent from '../components/CircleImageComponent';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <CircleImageComponent
            uri={require('../assets/images/profileScreen/profile.png')}
          />
        </View>
        <Text style={styles.header.label}>Asep Joko</Text>
      </View>
      <View style={styles.body}>
        <ButtonProfileComponent
          label="ubah profile"
          onPress={() => {
            navigation.navigate('ChangeProfile');
          }}
        />
        <ButtonProfileComponent
          label="ganti password"
          onPress={() => {
            navigation.navigate('ChangePassword');
          }}
        />
        <ButtonProfileComponent label="keluar" />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    backgroundColor: '#FF642B',
    alignItems: 'center',
    paddingVertical: 30,
    label: {
      color: '#FFF',
      fontSize: 14,
      fontWeight: '600',
    },
  },
  body: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
