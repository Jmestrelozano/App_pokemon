import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Loading = () => {
    return(
        <View style={styles.activityContainer}>
            <ActivityIndicator color={'grey'} size={50} />
  
            <Text>Cargando...</Text>
        </View>
      )
}



const styles = StyleSheet.create({
    activityContainer:{
        flex:1,justifyContent:'center',alignItems:'center'
      },
})