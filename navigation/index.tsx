import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import Search from '../screens/Search';
import {RootStackParamList} from './RootStackParams';

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Dashboard'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Search'} component={Search} />
        <Stack.Screen name={'Dashboard'} component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
