import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeScreen from './screens/HomeScreen'
import AuthenticationScreen from './screens/Authenticate/Index'

const SrcRoot = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    // Check if user is logged in
    // Set isLoggedIn state accordingly
    // For the purpose of this example, we'll set isLoggedIn to true
    setIsLoggedIn(true);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Auth" component={AuthenticationScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SrcRoot;