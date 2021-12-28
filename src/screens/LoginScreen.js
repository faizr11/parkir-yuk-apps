import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import InputFieldComponent from '../components/InputFieldComponent';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    console.log(email);
  };
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../assets/images/logo.png')}
      />
      <View style={styles.header}>
        <Text style={styles.header.title}>Selamat datang!</Text>
        <Text style={styles.header.subTitle}>Siap parkir anti ribet?</Text>
      </View>
      <Image
        resizeMode="contain"
        style={{width: '100%'}}
        source={require('../assets/images/loginScreen/Parking-pana.png')}
      />
      <InputFieldComponent
        placeholder="Email"
        value={email}
        onChangeText={value => {
          setEmail(value);
        }}
      />
      <InputFieldComponent
        placeholder="Password"
        value={password}
        onChangeText={value => {
          setPassword(value);
        }}
      />
      <View style={{marginVertical: 10}}>
        <ButtonComponent
          label="LOGIN"
          onPress={() => {
            handleSubmit();
          }}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <Text style={styles.register}>
          Don't have an account?
          <Text
            style={{fontWeight: 'bold'}}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            Sign Up
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  image: {
    width: '25%',
    marginLeft: '3%',
    marginTop: '3%',
  },
  header: {
    alignItems: 'center',
    marginTop: 25,
    title: {
      color: '#455A64',
      fontSize: 18,
    },
    subTitle: {
      color: '#455A64',
      fontSize: 14,
      marginTop: 12,
    },
  },
  button: {
    borderRadius: 100,
    backgroundColor: '#000',
  },
  register: {
    fontSize: 14,
    color: '#455A64',
  },
});
