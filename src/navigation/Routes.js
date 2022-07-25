import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import HelloWorldApp from '../screen/HelloWorldApp';
import GenerateQRCode from '../screen/GenerateQRCode';
import Scanner from '../screen/Scanner';



const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="GenerateQRCode" component={GenerateQRCode} />

        <Stack.Screen name="HelloWorldApp" component={HelloWorldApp} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Scanner" component={Scanner} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;