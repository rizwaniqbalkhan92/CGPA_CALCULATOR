// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../authentication/screens/Login';
import SignUp from '../authentication/screens/SignUp';
import SocialLogin from '../authentication/screens/SocialLogin';
import GetStarted from '../authentication/screens/GetStarted';


const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    // <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SocialLogin" component={SocialLogin} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default AuthNavigation;