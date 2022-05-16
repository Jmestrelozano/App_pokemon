import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Navigation } from './src/navigation/Navigation'
import { TabNavigation } from './src/navigation/TabNavigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <View style={{flex:1}}>
     
     <NavigationContainer>
      <TabNavigation />
     </NavigationContainer>

    </View>
  )
}

export default App

const styles = StyleSheet.create({})