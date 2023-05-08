import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import SetPasswordScreen from './SetPasswordScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';



const Stack = createNativeStackNavigator();

const AuthenticationScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login"  options={{ title: '' }} component={SetPasswordScreen} />
    
    </Stack.Navigator>
  )
}

export default AuthenticationScreen

const styles = StyleSheet.create({})