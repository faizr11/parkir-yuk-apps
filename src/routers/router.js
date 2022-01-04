import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import tabRouter from './tabRouter';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import ChangeProfileScreen from '../screens/ChangeProfileScreen';
import CarParkingScreen from '../screens/CarParkingScreen';
import MotorParkingScreen from '../screens/MotorParkingScreen';
import OrderScreen from '../screens/OrderScreen';
import TransactionSuccessScreen from '../screens/TransactionSuccessScreen';

const Stack = createNativeStackNavigator();

const router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Order"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Root" component={tabRouter} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="ChangeProfile" component={ChangeProfileScreen} />
        <Stack.Screen name="CarParking" component={CarParkingScreen} />
        <Stack.Screen name="MotorParking" component={MotorParkingScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen
          name="TransactionSuccess"
          component={TransactionSuccessScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default router;
