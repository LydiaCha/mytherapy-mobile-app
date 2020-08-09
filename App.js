import React, { Component } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import  HomeFeed from './screens/HomeFeed';
import  Community from './screens/Community';
import  Therapist from './screens/Therapist';
import  Chat from './screens/Chat';
import  Settings from './screens/Settings';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeFeed') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Community') {
            iconName = focused ? 'users' : 'users';
          } else if (route.name === 'Therapist') {
            iconName = focused ? 'heart' : 'heart';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'comments' : 'comments';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'cog' : 'cog';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="HomeFeed" component={HomeFeed} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Therapist" component={Therapist} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}


export default App;