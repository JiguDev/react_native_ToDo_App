import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import SettingsScreen from '../Screens/SettingsScreen'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName
                if (route.name === 'Home') {
                    iconName = 'home'
                } else if (route.name === 'Profile') {
                    iconName = 'person'
                } else if (route.name === 'Settings') {
                    iconName = 'settings'
                }
                return <Icon name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'gold',
            tabBarInactiveTintColor: 'silver',
            tabBarLabel:({ focused, color, size }) => {
                let label
                if (route.name === 'Home') {
                    label = 'Home'
                } else if (route.name === 'Profile') {
                    label = 'Profile'
                } else if (route.name === 'Settings') {
                    label = 'Settings'
                }
                return <Text style={{ color: focused ? color : 'gray', fontSize: size }}>{label}</Text>
            },
        })}
    >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator> 
  )
}

export default BottomTabNavigator