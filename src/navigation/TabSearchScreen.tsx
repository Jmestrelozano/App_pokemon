import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokemonScreen from "../screens/PokemonScreen";
import SearchScreen from "../screens/SearchScreen";
import { RootStackParams } from "./Navigation";

const TabSearch = createNativeStackNavigator<RootStackParams>();


export const TabSearchScreen = () => {
    return (
      
        <TabSearch.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
          <TabSearch.Screen name="Home" component={SearchScreen} />
          <TabSearch.Screen name="Pokemon" component={PokemonScreen} />
        </TabSearch.Navigator>
    );
  }