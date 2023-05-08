import React, {useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

import HomeScreen from './screens/HomeScreen'
import AuthenticationScreen from './screens/Authenticate/Index'

const SrcRoot = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    // Check if user is logged in
    // Set isLoggedIn state accordingly
    // For the purpose of this example, we'll set isLoggedIn to true
    setIsLoggedIn(false);
  }, []);

  return (
    <NavigationContainer>
    <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Auth"  options={{ title: '' }} component={AuthenticationScreen} />
        )}
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default SrcRoot;