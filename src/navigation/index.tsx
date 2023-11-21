import React, {memo, useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabs from './MainTabs';
import {MainStackParams} from './types';
import {AppLoading} from 'src/screens';

const MainStack = createStackNavigator<MainStackParams>();

const NavigationRoot = () => {
  const appLoading = false;

  const currentScreen = useMemo(() => {
    return (
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="MainStack" component={MainTabs} />
      </MainStack.Navigator>
    );
  }, []);

  if (appLoading) {
    return <AppLoading />;
  }

  return currentScreen;
};

export default memo(NavigationRoot);
