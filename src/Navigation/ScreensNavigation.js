// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../authenticated/screens/Home/Home';
import AddSemester from '../authenticated/screens/AddSemester/AddSemester';
import List from '../constants/List';



const Stack = createNativeStackNavigator();


function ScreensNavigation() {
  return (

      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddSemester" component={AddSemester} />
        <Stack.Screen name="List" component={List} />
      
      </Stack.Navigator>

  );
}

export default ScreensNavigation;