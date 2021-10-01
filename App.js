import React from 'react';
import {Text, View} from 'react-native';

import 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';

import Intro from './screens/components/intro/index';
import ListaAF from './screens/components/ListaAF/index';
import Juego from './screens/components/Juego/index';
import ListaFJ from './screens/components/ListaFj/index';
import IntroPrueba from './screens/components/introprueba/index';
import Prueba from './screens/components/Prueba/index';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Intro} />
        <Stack.Screen name="Animales" component={ListaAF} />
        <Stack.Screen name="Frutas" component={ListaFJ} />
        <Stack.Screen name="prueba" component={IntroPrueba} />
        <Stack.Screen name="Juego" component={Juego} />
        <Stack.Screen name="Prueba1" component={Prueba} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
