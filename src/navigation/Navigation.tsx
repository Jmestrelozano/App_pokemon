// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';
import { SimplePokemon } from '../interface/PokemonInterface';

export type RootStackParams = {
  Home: undefined,
  Pokemon: {simplePokemon: SimplePokemon, color: string}
  Search: undefined
}

const Stack = createNativeStackNavigator<RootStackParams>();

export const Navigation = () => {


  return (
    
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pokemon" component={PokemonScreen} />
      </Stack.Navigator>
  );
}