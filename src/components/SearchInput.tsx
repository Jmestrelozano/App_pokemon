import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import  Icon  from 'react-native-vector-icons/Ionicons'
import { useDebounceValue } from '../hooks/UseDebounceValue'

interface SearchInputProps {
    onDebounce: (value:string)=>void
}
export const SearchInput = ({onDebounce}:SearchInputProps) => {

    const [textValue,setTextValue] = useState('')

  const debounceValue = useDebounceValue(textValue)

  useEffect(()=>{
      onDebounce(debounceValue)
  },[debounceValue])
  return (
    <View style={styles.container}>
        <View style={styles.textBackground}>
            <TextInput
                placeholder='Buscar pokemon'
                style={styles.textInput}
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={(text)=>setTextValue(text)}
            />
            <Icon 
                name='search-outline' 
                size={30}
                color='grey'
            />
        </View>
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
    container:{
        marginTop:15,
        position:'absolute',
        width:'100%',
        zIndex:1
        // flex:1
    },
    textBackground:{
        borderRadius:50,
        height:40,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:0
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5,
        backgroundColor:'#f3f1f3'
    },
    textInput:{
        flex:1,
        top:2,
        fontSize:18
    }

})