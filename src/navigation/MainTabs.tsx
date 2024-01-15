/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {MainTabScreens} from './types';
import {HomeScreen} from '../screens';
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
         
        }}
      />
    </MainTab.Navigator>
  );
};

export default React.memo(MainTabs);
