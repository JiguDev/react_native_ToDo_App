import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../Screens/LoginScreen'
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Main" component={BottomTabNavigator} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthNavigator