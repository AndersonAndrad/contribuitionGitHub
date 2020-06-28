import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();

// pages
import Login from '../src/modules/login/page/Login';
import Contribuition from '../src/modules/contribuitions/contribuitions/pages/contribuition.page';
import Activity from '../src/modules/contribuitions/activity/pages/activity.page';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="login" component={Login} />
        <AppStack.Screen name="contribuition" component={Contribuition} />
        <AppStack.Screen name="activity" component={Activity} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
