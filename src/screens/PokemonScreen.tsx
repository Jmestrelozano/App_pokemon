import {ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from '../Utils/FadeInImage';
import { usePokemon } from '../hooks/UsePokemon';
import { PokemonDetail } from '../components/PokemonDetail';

interface Props extends NativeStackScreenProps<RootStackParams, 'Pokemon'> {}
const PokemonScreen = (props: Props) => {
  const {simplePokemon:{name,id,picture}, color} = props.route.params;


  const {isLoading,pokemon:poke}  = usePokemon(id)

  


  return (
    <View style={{flex:1}}>
      <View style={{...styles.headerContainer, backgroundColor: color}}>
        
      </View>

      <TouchableOpacity onPress={()=>props.navigation.pop()} style={styles.backButtom}>
        <Icon name="arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>

      
      <View style={{position:'absolute',top:50,zIndex:2,left:8}}>
        <Text style={{...styles.pokemonName}}>{name + '\n'}#{id}</Text> 

        
        
        <View style={{left:'30%',right:'30%',flexDirection:'row'}}>
          <Image
            style={styles.pokeBola}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png',
            }}
          />

          <FadeInImage style={{width:250,height:250,bottom:-15,left:-90}} uri={picture} />
        </View> 
        

      </View>

     

      {
        isLoading ?

         <View style={styles.loading}>
          <ActivityIndicator color={color} size={40} />
        </View>
      :
      <PokemonDetail pokemon={poke} />
      }
    </View>
  );
};

export default PokemonScreen;

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 1,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButtom: {
    position: 'absolute',
    top: 10,
    zIndex: 2,
    left: 8,
  },
  pokemonName:{
    color:'white',
    fontSize:24,
    alignSelf:'flex-start',
  },
  pokeBola: {
    width: 250,
    height: 250,
  
  },
  loading:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
