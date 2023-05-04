import React from 'react';
import { NativeBaseProvider, Box } from "native-base";
import SrcRoot from './src/RootApp';


function App(): JSX.Element {

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#050505">
        <SrcRoot />
      </Box>
    </NativeBaseProvider>
  );
}


export default App;
