import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Navigation} from './Navigation';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { TabSearchScreen } from './TabSearchScreen';


const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator sceneContainerStyle={{
      backgroundColor:'white'
    }}
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor:'#5856d6',
      tabBarLabelStyle:{marginBottom:10},
      tabBarStyle:{
        borderWidth:0,
        elevation:0,
        height:60,
        position:'absolute',
        backgroundColor:'rgba(255,255,255,0.8)'
      }
    }}>
      <Tab.Screen 
        options={{
          tabBarLabel:'Listado',
          tabBarIcon: ({color})=>{
            return(
              <Icon
                name='list-outline'
                size={25}
                color={color}
              />
            )
          }
        }}
        name="Home" 
        component={Navigation} 
      />
      <Tab.Screen
        options={{
          tabBarLabel:'Buscador',
          tabBarIcon: ({color})=>{
            return(
              <Icon
                name='search-outline'
                size={25}
                color={color}
              />
            )
          }
        }}
        name="Search" 
        component={TabSearchScreen} 
        />
    </Tab.Navigator>
  );
};
