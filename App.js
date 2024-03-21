import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/home';
import MainScreen from './src/views/main';
import ExistenteScreen from './src/views/existente';
import RegistroVentaScreen from './src/views/registroventa';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="existente" component={ExistenteScreen} />
        <Stack.Screen name="VentaRegistro" component={RegistroVentaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
