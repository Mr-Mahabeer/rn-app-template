/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {MainTabScreens} from './types';
import {HomeScreen} from '../screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const MainTab = createBottomTabNavigator<MainTabScreens>();

const MainTabs = () => {
  return (
    <MainTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          unmountOnBlur: true,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default React.memo(MainTabs);
