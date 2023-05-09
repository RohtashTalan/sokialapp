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
      <Stack.Screen name="Login"  options={{ headerShown: false }} component={SetPasswordScreen} />
      <Stack.Screen name="Signup"  options={{ headerShown: false }} component={SignupScreen} />
      <Stack.Screen name="SetPassword"  options={{ headerShown: false }} component={SetPasswordScreen} />
      <Stack.Screen name="ForgotPassword"  options={{ headerShown: false }} component={ForgotPasswordScreen} />
    
    </Stack.Navigator>
  )
}

export default AuthenticationScreen

const styles = StyleSheet.create({})