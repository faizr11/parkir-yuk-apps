import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TicketScreen from '../screens/TicketScreen';
import HomeIcon from '../assets/icons/home.svg';

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
        }}
      />
      <Tab.Screen name="Ticket" component={TicketScreen} />
    </Tab.Navigator>
  );
};

export default tabRouter;
