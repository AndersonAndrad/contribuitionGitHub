import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();

// pages
import Login from '../src/modules/login/page/Login';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="login" component={Login} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
