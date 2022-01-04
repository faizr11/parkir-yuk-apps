import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TicketScreen from '../screens/TicketScreen';
import HomeIcon from '../assets/icons/home.svg';
import TicketIcon from '../assets/icons/ticket.svg';
import ScanIcon from '../assets/icons/scan.svg';
import ScanScreen from '../screens/ScanScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileIcon from '../assets/icons/profile.svg';

const Tab = createBottomTabNavigator();

const tabRouter = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: tabState => {
            return (
              <HomeIcon
                width={28}
                height={28}
                fill={tabState.focused ? '#FF725E' : '#455A64'}
              />
            );
          },
          tabBarLabel: tabState => {
            return (
              <Text
                style={
                  tabState.focused ? {color: '#FF725E'} : {color: '#455A64'}
                }>
                Home
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarIcon: tabState => {
            return (
              <TicketIcon
                width={28}
                height={28}
                fill={tabState.focused ? '#FF725E' : '#455A64'}
              />
            );
          },
          tabBarLabel: tabState => {
            return (
              <Text
                style={
                  tabState.focused ? {color: '#FF725E'} : {color: '#455A64'}
                }>
                Ticket
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: tabState => {
            return (
              <ScanIcon
                width={28}
                height={28}
                fill={tabState.focused ? '#FF725E' : '#455A64'}
              />
            );
          },
          tabBarLabel: tabState => {
            return (
              <Text
                style={
                  tabState.focused ? {color: '#FF725E'} : {color: '#455A64'}
                }>
                Scan
              </Text>
            );
          },
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Scan QR Code',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: tabState => {
            return (
              <ProfileIcon
                width={28}
                height={28}
                fill={tabState.focused ? '#FF725E' : '#455A64'}
              />
            );
          },
          tabBarLabel: tabState => {
            return (
              <Text
                style={
                  tabState.focused ? {color: '#FF725E'} : {color: '#455A64'}
                }>
                Profile
              </Text>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default tabRouter;
