// Top part of the app
// Where we import all the libraries that we want to use in this page.
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // https://reactnavigation.org/docs/getting-started/
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home'
import Settings from './pages/Settings'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import BottomSheetPage from './pages/BottomSheet';

const Stack = createStackNavigator()

// The function that is written here is that the actual part that is shown to the user
export default function App() {
  // The backend part

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BottomSheetPage'>
      <Stack.Screen
          name = "Login"
          component={Login}
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen
          name = "Home"
          component = {Home}
        />
        <Stack.Screen
          name = "Settings"
          component = {Settings}
        />
        <Stack.Screen
          name = "SignUp"
          component = {SignUp}
        />
        <Stack.Screen
          name = "BottomSheetPage"
          component = {BottomSheetPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// This is the styling part. Kind of like CSS.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
