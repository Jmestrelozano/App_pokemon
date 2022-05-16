import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Pokemon} from '../interface/PokemonInterface';
import { FadeInImage } from '../Utils/FadeInImage';

interface PokemonDetailProps {
  pokemon: Pokemon;
}

export const PokemonDetail = ({pokemon}: PokemonDetailProps) => {
  return (
    <ScrollView
      style={{...StyleSheet.absoluteFillObject}}>
      <View style={styles.container}>
        <Text style={styles.title}>types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => {
            return (
              <Text
                key={type.name}
                style={{...styles.regularText, marginBottom: 10}}>
                {type.name}
              </Text>
            );
          })}
        </View>

        <Text style={styles.title}>peso</Text>
        <Text style={styles.regularText}>{pokemon.weight} kg</Text>
      </View>

      <View style={{...styles.container,marginTop:20}}>
        <Text style={styles.title}>sprites</Text>

        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <FadeInImage uri={pokemon.sprites.front_default}  style={styles.basicSprite}/>
            <FadeInImage uri={pokemon.sprites.back_default}  style={styles.basicSprite}/>
            <FadeInImage uri={pokemon.sprites.front_shiny}  style={styles.basicSprite}/>
            <FadeInImage uri={pokemon.sprites.back_shiny}  style={styles.basicSprite}/>
        </ScrollView>


       
      </View>

      <View style={{...styles.container,marginTop:0}}>
        <Text style={styles.title}>Hability</Text>

        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => {
            return (
              <Text
                key={ability.name}
                style={{...styles.regularText, marginBottom: 10}}>
                {ability.name}
              </Text>
            );
          })}
        </View>

    </View>


    <View style={{...styles.container,marginTop:0}}>
        <Text style={styles.title}>Moves</Text>

        <View style={{flexDirection: 'row',flexWrap:'wrap',width:'100%'}}>
          {pokemon.moves.map(({move}) => {
            return (
              <Text
                key={move.name}
                style={{...styles.regularText, marginBottom: 10,marginRight:10}}>
                {move.name}
              </Text>
            );
          })}
        </View>

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 370,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    textTransform: 'capitalize',
  },
  regularText: {
    fontSize: 17,
  },
  basicSprite:{
      height:100,
      width:100
  }
});
