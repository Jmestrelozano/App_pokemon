import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {UsePokemonPaginate} from '../hooks/UsePokemonPaginate';
import {FadeInImage} from '../Utils/FadeInImage';
import {PokemonCard} from '../components/PokemonCard';

const HomeScreen = () => {
  const {isLoading, listPokemon, loadPokemons} = UsePokemonPaginate();

  return (
    <>
      <View style={{alignItems: 'flex-end'}}>
        <Image
          style={styles.pokeBola}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png',
          }}
        />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          data={listPokemon}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          numColumns={2}
          ListHeaderComponent={
            <View style={{marginHorizontal: 10}}>
              <Text style={styles.title}>Pokedex</Text>
            </View>
          }
          renderItem={({item}) => {
            return <PokemonCard pokemon={item} />;
          }}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={50} color="red" />
          }
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pokeBola: {
    width: 170,
    height: 170,
    position: 'absolute',
  },
  title: {
    marginVertical: 25,
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
