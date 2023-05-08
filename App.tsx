import React from 'react';
import { NativeBaseProvider, Box } from "native-base";
import SrcRoot from './src/RootApp';
import { NavigationContainer } from '@react-navigation/native';


function App(): JSX.Element {

  return (
        <SrcRoot />
  );
}


export default App;
