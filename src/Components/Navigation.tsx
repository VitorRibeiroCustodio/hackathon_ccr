import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Main from '../Screens/Main';
import DonationsScreen from '../Screens/Donations';
import ProfileScreen from '../Screens/Profile';

const Tab = createMaterialBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Histórias"
      shifting={true}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Histórias"
        component={Main}
        options={{
          tabBarIcon: 'home-account',
        }}
      />
      <Tab.Screen
        name="Doações"
        component={DonationsScreen}
        options={{
          tabBarIcon: 'bell-outline',
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: 'message-text-outline',
        }}
      />
    </Tab.Navigator>
  );
}

