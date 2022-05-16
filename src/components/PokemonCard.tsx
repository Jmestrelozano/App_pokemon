import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {SimplePokemon} from '../interface/PokemonInterface';
import {FadeInImage} from '../Utils/FadeInImage';
import ImageColors from 'react-native-image-colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/Navigation';
import { useNavigation } from '@react-navigation/native';

type PokemonCardScreen = NativeStackNavigationProp<
  RootStackParams,
  'Home',
  'Search'
>;


interface PokemonCardProps {
  pokemon: SimplePokemon;
}

const width = Dimensions.get('window').width;
export const PokemonCard = ({pokemon}: PokemonCardProps) => {

  const navigation = useNavigation<PokemonCardScreen>()
  const [bgColor, setBgColor] = useState('grey')

  const isMountend = useRef(true)

  const getColorsImage = async() =>{
      const result = await ImageColors.getColors(pokemon.picture,{fallback:'grey'})
      if(!isMountend.current) return
      result.platform ==='android' && setBgColor(result.dominant || 'grey')
  }

  useEffect(()=> {
      getColorsImage()

      return ()=> {isMountend.current= false}
  },[])

  return (
    <TouchableOpacity onPress={()=> navigation.push('Pokemon',{simplePokemon:pokemon ,color:bgColor})} >
      <View style={{...styles.cardContainer, width: width * 0.4,backgroundColor:bgColor}}>
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>
        <View style={styles.pokebolaContainer}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png',
            }}
            style={styles.pokeBola}
          />
        </View>

        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokeBola: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -20,
    right: -20,
    opacity: 0.5,
  },
  pokemonImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -6,
    bottom: -5,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.5,
  },
});
