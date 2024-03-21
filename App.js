import {StatusBar} from 'expo-status-bar';
import Main from './src/views/main'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/home';
import RegistroVenta from './src/views/registroventa';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar></StatusBar>
      <Stack.Navigator initialRouteName="Principal">

        <Stack.Screen 
        name="Home" 
        component={Main}/>

        <Stack.Screen
        name='Principal'
        component={HomeScreen}/>

        <Stack.Screen
        name='VentaRegistro'
        component={RegistroVenta}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
